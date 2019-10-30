import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <p onClick={() => {deleteTodo(todo.id)}}>
                    {todo.content}
                    </p>
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
