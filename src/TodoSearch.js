import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
    return (
        <input
            placeholder="Cortar cebolla"
            className="TodoSearch"
            value={searchValue}
            onChange={
                (event) => {
                    const inputValue = event.target.value;
                    setSearchValue(inputValue);
                }
            }
        />
    );
}

export { TodoSearch };
