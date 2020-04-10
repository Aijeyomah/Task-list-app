import React, { createContext, useState, useEffect } from 'react'
import uuid from "react-uuid";

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
    const initialState= JSON.parse(localStorage.getItem('tasks') )
    const [tasks, setTask] = useState(initialState);
    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])



    const addTask = (title) => {
        setTask([...tasks, { title, id: uuid() }])
    }

    const removeTask = id => {
        setTask(tasks.filter(task => task.id !== id))
    }

    const clearList = () => {
        setTask([])
    }
    const findItem = (id) => {
        const item = tasks.find(task => task.id === id)
        setEditItem(item)

    }
    const editTask = (title, id) => {
        const newTask = tasks.map(task => (task.id === id ? { title, id } : task))
        setTask(newTask)
        setEditItem(null)
    }
    return (
        <div>
            <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList, findItem, editTask, editItem }}>
                {props.children}
            </TaskListContext.Provider>
        </div>
    )
}
export default TaskListContextProvider