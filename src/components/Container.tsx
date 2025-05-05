import { ElementType } from "react";
import { ContainerProps } from "../types/ContainerProps";

function Container<T extends ElementType>({as, children, ...props}: ContainerProps<T>) {
    const Component = as || 'div';
    return <Component {...props}>{children}</Component>
}

export default Container;