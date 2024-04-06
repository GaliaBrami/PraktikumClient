import logo from './logo.svg';
import './App.css';
import WorkerList from './components/WorkerList';
import WorkerForm from './components/WorkerForm';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
    <h1>Worker Management</h1>
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/workerList" element={<WorkerList></WorkerList>}/>
        <Route path="/workerForm" element={<WorkerForm></WorkerForm>}/>
    </Routes>
    </>
  );
}

export default App;
