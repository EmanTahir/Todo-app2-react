// import React, { useState } from 'react'

// export default function UpdateTodo(props) {
//     const [todoValue, setTodoValue] = useState(props.todo);

//     const handleUpdate = (index, newValue) => {
//         const updatedTodos = [...props.todos];
//         updatedTodos[index] = newValue;
//         props.setTodos(updatedTodos);
//     }
    

//     return (
//         <div>
//             <input type="text" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
//             <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
//         </div>
//     )
// }