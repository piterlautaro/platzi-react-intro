import './CreateTodoButton.css';

function CreateTodoButton({ catchTodo }) {
    const emitTodo = () => {
        const newTodo = window.prompt("Ingresa el TODO:")
        catchTodo(newTodo)
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={emitTodo}
            >+</button>
    );
}

export { CreateTodoButton };
