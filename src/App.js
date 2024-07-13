import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './TodoItem.css';
import './Icon.css';

const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar cerveza', completed: false },
    { text: 'Cortar papas', completed: false },
];

function App() {

    const localStorageKey = 'TODOS_V1';
    const localStorageTodos = localStorage.getItem(localStorageKey);

    let parsedTodos = [];

    if (!localStorageTodos) {
        localStorage.setItem(localStorageKey, JSON.stringify([]));
        parsedTodos = [];
    } else {
        localStorage.setItem(localStorageKey, localStorageTodos);
        parsedTodos = JSON.parse(localStorageTodos);
    }
    
    // let parsedTodos = JSON.parse(localStorageTodos);

    const [todos, setTodos] = React.useState(parsedTodos);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const serchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

            return todoText.includes(searchText);
        }
    );

    const saveTodos = (newTodos) => {
        setTodos(newTodos);
        localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    }

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((todo) => todo.text === text);
        newTodos[index].completed = !newTodos[index].completed;

        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(index, 1);

        saveTodos(newTodos);
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
