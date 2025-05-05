import { InputProps } from "../types/InputProps";

function Input({ id, label, ...props }: InputProps) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </p>
    );
}

export default Input;