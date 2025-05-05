import { ContainerProps } from "../types/ContainerProps";

function Container({as}: ContainerProps) {
    const Component = as;
    return <Component />
}

export default Container;