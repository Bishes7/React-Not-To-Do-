import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";

function App() {
  const [taskList, settaskList] = useState([]);

  const addTaskList = (taskObj) => {
    const obj = {
      ...taskList
      id: randomIdGnerator(),
      type: "entry",
    };

    settaskList([...taskList, obj]);
  };
  console.log(taskList);

  const randomIdGnerator = (length = 6) => {
    const str =
      "qwertyuioplkjhgfdsazxxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";

    let id = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);

      id += str[randomIndex];
    }
    return id;
  };
  return (
    <>
      <div className="wrapper pt-5">
        <div className="container">
          <h1 className="text-center yuji-mai-regular">Time Divider App</h1>

          {/* <!-- form --> */}
          <Form addTaskList={addTaskList} />

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
