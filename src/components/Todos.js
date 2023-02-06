import React from 'react'

export default function Todos(props) {

    const handleSelect = (index) => {
        props.setSelectedTodo(index);
    }

    return (
        <div>
            <ul class="list-group d-flex">
                {props.todos.map((todo, index) =>
                    <div class="row">
                        <li class="list-group-item col-sm-8" key={todo}>{todo}</li>
                        <div class="col-sm-4">
                            <button type="button" className="btn btn-danger" onClick={() => props.handleDelete(index)}>Delete</button>
                            <button type="button" className="btn btn-primary" onClick={() => handleSelect(index)}>Update</button>
                        </div>
                    </div>)}
            </ul>
        </div>

    )
}
