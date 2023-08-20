import React, { useEffect, useState } from "react";
import axios from 'axios';
import './App.css'
function App() {
  // Define the URL of the API endpoint
  const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment';

  // Use Axios to make the GET request
  const [elementData_0, setelementData_0] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setelementData_0(response.data.tickets);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <div class="verificationselect" style={{ margin: '0 auto' }}>
        <select  className="verificationselect">
          <option value="0">Pending</option>
          <option value="1">Approved</option>
          <option value="2">Rejected</option>
        </select>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <div>
          <div><h1>0</h1></div>
          {elementData_0.map((ele) => {
            if (ele.priority === 0) {
              return (
                <div className="messmenuwrapper">
                  <ul className="messmenuflex messmenucards">
                    <li className="rounded overflow-hidden shadow-2xl">
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{ele.id}</div>
                        <p className="text-gray-700 text-base">
                          {ele.title}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div>
          <div><h1>1</h1></div>
          {elementData_0.map((ele) => {
            if (ele.priority === 1) {
              return (
                <div className="messmenuwrapper">
                  <ul className="messmenuflex messmenucards">
                    <li className="rounded overflow-hidden shadow-2xl">
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{ele.id}</div>
                        <p className="text-gray-700 text-base">
                          {ele.title}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div>
          <div><h1>2</h1></div>
          {elementData_0.map((ele) => {
            if (ele.priority === 2) {
              return (
                <div className="messmenuwrapper">
                  <ul className="messmenuflex messmenucards">
                    <li className="rounded overflow-hidden shadow-2xl">
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{ele.id}</div>
                        <p className="text-gray-700 text-base">
                          {ele.title}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div>
          <div><h1>3</h1></div>
          {elementData_0.map((ele) => {
            if (ele.priority === 3) {
              return (
                <div className="messmenuwrapper">
                  <ul className="messmenuflex messmenucards">
                    <li className="rounded overflow-hidden shadow-2xl">
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{ele.id}</div>
                        <p className="text-gray-700 text-base">
                          {ele.title}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div>
          <div><h1>4</h1></div>
          {elementData_0.map((ele) => {
            if (ele.priority === 4) {
              return (
                <div className="messmenuwrapper">
                  <ul className="messmenuflex messmenucards">
                    <li className="rounded overflow-hidden shadow-2xl">
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{ele.id}</div>
                        <p className="text-gray-700 text-base">
                          {ele.title}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

      </div>

    </div>
  );
}

export default App;
