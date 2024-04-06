import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/WorkerList.css';
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa'; // Import icons for delete, edit, and add
import axios from 'axios';
// import actions from "../store/index"
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../store/action';

const WorkerList = () => {
  // const [workers, setWorkers] = useState([]);
  const [filteredWorkers, setFilteredWorkers] = useState([]);
  const [isAddingOrEditing, setAorE] = useState(false);
  const [editingWorker, setE] = useState(null);
  const [roles, setRoles] = useState({});
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const workers=useSelector(x=>x.workers);
  useEffect(() => {

    axios.get("https://localhost:7170/api/Worker")
      .then(info => {
        console.log(info.data, "daratatrtra")
        dispatch({ type: action.SET_WORKERS, workers: info.data })
        // setWorkers(info.data)
        console.log(workers)
        setFilteredWorkers(info.data);
      })
      .catch(err => console.log(err));
  }, []);

 


  return (
    <div className="worker-table-container">
      <h2 className="table-heading">Worker Table</h2>
      <table className="worker-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Identity</th>
            <th>Starting Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {workers.map(worker => (
            worker.status==true?
            <tr key={worker.id}>
              <td>{worker.firstName}</td>
              <td>{worker.lastName}</td>
              <td>{worker.identity}</td>
              <td>{worker.startDate}</td>
              {/* הוספת תפקיד לעובד */}
              <td><FaEdit onClick={() => {
                dispatch({ type: action.SET_WORKER, worker: worker });
                navigator(`/workerForm`)
              }} /></td>
              <td><FaTrash onClick={() => {
                axios.put(`https://localhost:7170/api/Worker/status/${worker.id}`).then(info=>{
                  dispatch({ type: action.EDIT_WORKER, worker: info })
                }) 
                }} />
              </td>
            </tr>:null
          ))}
        </tbody>
      </table>
      <div className="action-buttons">
        
        <button onClick={() => navigator("/workerForm")}><FaPlus /> Add Worker</button>

        {/* <button onClick>Save to Database</button> */}
      </div>
    </div>
  );
}


export default WorkerList;