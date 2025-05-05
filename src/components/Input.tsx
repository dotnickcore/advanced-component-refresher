import { forwardRef } from "react";
import { InputProps } from "../types/InputProps";
/*
    When a child component needs to reference its parent component's current node, the parent component needs a way to send down its ref to the child. The technique is called ref forwarding, and it is very useful when building reusable component libraries.
*/

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { id, label, ...props }, ref
) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} ref={ref} />
        </p>
    );
});

export default Input;