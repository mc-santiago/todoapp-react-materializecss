import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item avatar" key={todo.id}>
                        <img src="https://i.postimg.cc/sfShJ2zH/checklist-2077023-1280.jpg" alt="ckecklist" className="circle"/>
                        <p>{todo.content}</p>
                        <a className="secondary-content btn-flat waves-effect waves-light" onClick={() => {deleteTodo(todo.id)}}>
                            <i className="material-icons">delete</i>
                        </a>
                </div>
            )
        })
    ) : (
        <p className="center"> 
            It looks like you are done for the week. Now get out of here and go have a caña or something!
        </p>
    )
    
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;
