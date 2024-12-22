import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper pt-5">
        <div className="container">
          <h1 className="text-center yuji-mai-regular">Time Divider App</h1>

          {/* <!-- form --> */}
          <form
            onSubmit="handleOnSubmit(this)"
            action="javascript:void(0)"
            className="border p-5 rounded-5 shadow-lg mt-5"
          >
            <div className="row g-2">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Task "
                  aria-label="First name"
                  name="task"
                  id="task"
                />
              </div>
              <div className="col-md-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="hours"
                  aria-label="Last name"
                  name="hours"
                  min="1"
                />
              </div>
              <div className="col-md-4 d-grid">
                <button className="btn btn-success">Add New Task</button>
              </div>
            </div>
          </form>

          {/* <!-- Tables --> */}
          <div className="row mt-5">
            <div className="col-md text-center">
              <h3>Entry List</h3>
              <hr />
              <table className="table table-striped table-hover border shadow-lg">
                <tbody id="entryList"></tbody>
              </table>
            </div>
            <div className="col text-center">
              <h3>Bad List</h3>
              <hr />
              <table className="table table-striped table-hover border shadow-lg">
                <tbody id="badlist"></tbody>
              </table>
              <div className="alert alert-success">
                You could have saved <span id="savedhours">0</span>
              </div>
            </div>
          </div>
          <div className="alert alert-success text-center">
            The total hours allocated is <span id="ttl">0</span> hours
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
