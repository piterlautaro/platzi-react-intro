// https://react-icons.github.io/react-icons/
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <CompleteIcon props={props}/>

            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>

            <DeleteIcon props={props}/>
        </li>
    );
}

export { TodoItem };
