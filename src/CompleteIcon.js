import { FaCheck } from "react-icons/fa";

function CompleteIcon({ props }) {
    return (
        <span
            className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
            onClick={props.onComplete}>
            <FaCheck />
        </span>
    );
};

export { CompleteIcon };