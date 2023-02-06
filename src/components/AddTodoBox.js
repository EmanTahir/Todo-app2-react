import React, { useState } from 'react'
import Todos from './Todos';

export default function AddTodoBox() {
    const [todoValue, setTodoValue] = useState('');
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        setTodoValue('');
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    const handleUpdate = (index, newValue) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = newValue;
        setTodos(updatedTodos);
        setSelectedTodo(null);
        setTodoValue("");
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }
    const handleDelete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    const handleSelect = (index) => {
        setSelectedTodo(index);
        setTodoValue(todos[index]);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: '20px' }}>
                        <input type="text" id="newTodo" placeholder={selectedTodo !== null ? todos[selectedTodo] : "Enter new to-do"} value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
                        <button onClick={() => selectedTodo !== null ? handleUpdate(selectedTodo, document.getElementById("newTodo").value) : addTodo(document.getElementById("newTodo").value)}>{selectedTodo !== null ? "Update Todo" : "Add Todo"}</button>
                    </div>
                    <Todos todos={todos} handleDelete={handleDelete} setSelectedTodo={handleSelect} />
                </div>
            </div>
        </div>
    )
}
