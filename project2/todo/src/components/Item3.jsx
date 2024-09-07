function Item2() {
  var todo = "Go to College";
  var date = "4/10/2023";

  return (
    <div className="container text-center">
  
      <div className="row">
        <div className="col-6">
          {todo}
        </div>
        <div className="col-4">
           {date}
        </div>
        <div className="col-2">
           <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Item2;
