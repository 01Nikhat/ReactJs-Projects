import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsAction } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector(store => store.fetchStatus); // 1. Accessing fetch status from Redux store
  const dispatch = useDispatch(); // 2. Getting the dispatch function from Redux

  useEffect(() => { // 3. React hook to manage side effects like fetching data
    if (fetchStatus.fetchDone) return; // 4. Check if fetch has already been completed, skip if true

    const controller = new AbortController(); // 5. Create an AbortController instance to cancel fetch requests
    const signal = controller.signal; // 6. Get the signal property, which is passed to the fetch request

    dispatch(fetchStatusActions.markFetchingStarted()); // 7. Dispatch an action to update the state that fetching has started

    fetch("http://localhost:8080/items", { signal }) // 8. Fetching data from the server with abort signal
      .then((res) => {
        if (!res.ok) { // 9. Check if response is not OK (error from the server)
          throw new Error('Fetch failed'); // 10. Throw an error if response is bad
        }
        return res.json(); // 11. Parse the response as JSON
      })
      .then(({ items }) => { // 12. Handle the parsed response data
        dispatch(fetchStatusActions.markFetchDone()); // 13. Mark fetching as done in the Redux store
        dispatch(fetchStatusActions.markFetchingFinished()); // 14. Mark fetching process as finished
        dispatch(itemsAction.addInitialItems(items[0])); // 15. Dispatch action to add the fetched items to Redux store
        //console.log("items fetched", items); // 16. Log fetched items to console
      })
      .catch((err) => { // 17. Handle errors that occur during the fetch
        if (err.name === "AbortError") { // 18. Check if the error was caused by aborting the fetch
          console.log("Fetch aborted"); // 19. Log abort message if fetch was canceled
        } else {
          console.error("Fetch error:", err); // 20. Log other fetch errors to the console
        }
      });

    return () => { // 21. Cleanup function executed when the component unmounts or dependencies change
      //console.log("cleaned, aborting fetch"); // 22. Log cleanup action
      controller.abort(); // 23. Abort the fetch if it’s still running when the component unmounts
    };
  }, [fetchStatus, dispatch]); // 24. Dependency array: effect runs when fetchStatus or dispatch changes

  return <></>; // 25. Render nothing (or you can return any JSX here)
};

export default FetchItems;
