import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faHeading, faTag } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment';

  const [elementData, setElementData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [groupBy, setGroupBy] = useState("status"); // Default grouping by status
  const [sortBy, setSortBy] = useState("priority"); // Default sorting by priority

  useEffect(() => {
    const savedGroupBy = localStorage.getItem("group_by");
    const savedSortBy = localStorage.getItem("sort_by");

    if (savedGroupBy) {
      setGroupBy(savedGroupBy);
    }

    if (savedSortBy) {
      setSortBy(savedSortBy);
    }

    axios.get(apiUrl)
      .then(response => {
        setElementData(response.data.tickets);
        setUserData(response.data.users);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("group_by", groupBy);
  }, [groupBy]);

  useEffect(() => {
    localStorage.setItem("sort_by", sortBy);
  }, [sortBy]);

  const groupAndSortData = () => {
    let groupedData = {};

    // Group data based on the selected grouping option
    elementData.forEach(ele => {
      const groupKey = groupBy === "status" ? ele.status :
        groupBy === "user" ? ele.assigned_to :
          groupBy === "priority" ? ele.priority : "";

      if (!groupedData[groupKey]) {
        groupedData[groupKey] = [];
      }
      groupedData[groupKey].push(ele);
    });

    // Sort grouped data based on the selected sorting option
    for (const groupKey in groupedData) {
      if (sortBy === "priority") {
        groupedData[groupKey].sort((a, b) => b.priority - a.priority);
      } else if (sortBy === "title") {
        groupedData[groupKey].sort((a, b) => a.title.localeCompare(b.title));
      }
    }

    return groupedData;
  };

  const groupedAndSortedData = groupAndSortData();

  return (
    <div className="App">
      <div className="header">
        <select className="group-select" value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">By Status</option>
          <option value="user">By User</option>
          <option value="priority">By Priority</option>
        </select>
        <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Sort by Priority</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>
      <div className="card-container">
        {Object.entries(groupedAndSortedData).map(([groupKey, groupData]) => (
          <div className="group-card" key={groupKey}>
            <div className="group-title">{groupKey}</div>
            {groupData.map((ele) => (
              <div className="card" key={ele.id}>
                <div className="card-content">
                  <div className="card-id">
                    <FontAwesomeIcon icon={faHeading} /> ID: {ele.id}
                  </div>
                  <div className="card-title">
                    <FontAwesomeIcon icon={faTag} /> Title: {ele.title}
                  </div>
                  <div className="card-tag">
                    <FontAwesomeIcon icon={faTag} /> Tag: {ele.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
