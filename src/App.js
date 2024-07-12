import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar cerveza', completed: false },
    { text: 'Cortar papas', completed: false },
];

function App() {

    const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const serchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

            return todoText.includes(searchText);
        }
    )

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((todo) => todo.text === text);
        newTodos[index].completed = !newTodos[index].completed;

        setTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(index, 1);

        setTodos(newTodos);
    }

    return (
        <>
            <TodoCounter
                completed={completedTodos}
                total={totalTodos} />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}/>
            <TodoList>
                {serchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
        </>
    );
}

export default App;
