import { MdCancel } from "react-icons/md";

function DeleteIcon({ props }) {
    return (
        <span
            className="Icon Icon-delete"
            onClick={props.onDelete}>
            <MdCancel />
        </span>
    );
}

export { DeleteIcon };