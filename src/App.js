import React from 'react';
import './App.css';
import TaskList from './Component/TaskList';
import TaskListContextProvider from './context/TaskListContext';
import TaskForm from './Component/TaskForm';
import Header from './Component/Header';

const App=()=> {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className='app-wrapper'>
        <Header/>
          <div className='main'>
            <TaskForm/>
          <TaskList/>

          </div>
        </div>
        </div>
        </TaskListContextProvider>
   
  );
}

export default App;
