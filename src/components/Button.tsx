import { ComponentPropsWithoutRef } from 'react';

/*
    This is a polymorphic component — like a Button that sometimes renders as a <button> and sometimes as a <a>, depending on props.

    A polymorphic component is a reusable UI component that can render as different HTML elements (or even other components) based on a prop — usually called as, component, or determined by the presence of certain props (like href).

    If href is passed, you want to render an <a>, not a <button>.

    ButtonProps disallows href entirely with href?: never.

    AnchorProps allows href and even expects it if rendering as a link.
    
    href?: never = "This prop must not be provided."

    href?: string = "This prop can be provided and should be a string."

    This makes type discrimination clean and helps TypeScript infer the correct element to render.
*/

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string;
};

/*
    props: ButtonProps | AnchorProps
    The function accepts a parameter props that could either be of type ButtonProps or AnchorProps.

    The is keyword in TypeScript, when used in a function's return type, defines a type predicate

    "If 'href' in props is true, then props should be treated as AnchorProps."

    Return type: props is AnchorProps
    This is a user-defined type guard. It tells TypeScript that if this function returns true, then props should be treated as an AnchorProps type going forward.

    return 'href' in props;
    This checks if the property 'href' exists in props. Typically, only AnchorProps would have an href (like an <a> tag), while ButtonProps would not.

    This kind of function helps TypeScript narrow down the type of a union (ButtonProps | AnchorProps) based on the presence of certain properties.
*/
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}

function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}

export default Button;
