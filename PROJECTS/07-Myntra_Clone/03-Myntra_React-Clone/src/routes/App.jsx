import FetchItems from "../components/fetchItems";
import Footer from "../components/Footer"
import Header from "../components/Header"
import {Outlet} from "react-router-dom"

function App() {
  
  

  return (
   <>
   <Header />
   <FetchItems />
   <Outlet />
    <Footer />
   </>
  )
}

export default App;
