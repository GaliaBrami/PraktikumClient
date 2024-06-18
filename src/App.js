import logo from './logo.svg';
import './App.css';
import WorkerList from './components/WorkerList';
import WorkerForm from './components/WorkerForm';
import AddRole from './components/AddRole';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import WorkerDetails from './components/WorkerDetails';
import { analytics } from './firebase'; // Import the analytics instance if needed
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    // Perform Firebase operations here, e.g., logging an event
    console.log('Firebase Analytics Initialized:', analytics);
  }, []);
  return (
    <>
    <h1>Worker Management</h1>
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/workerList" element={<WorkerList></WorkerList>}/>
        <Route path="/workerForm" element={<WorkerForm></WorkerForm>}/>
        <Route path="/addRole" element={<AddRole></AddRole>}/>
        <Route path="/workerDetails" element={<WorkerDetails></WorkerDetails>}/>
    </Routes>
    </>
  );
}

export default App;
