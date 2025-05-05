import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export type ContainerProps<T extends ElementType> = {
  as: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

/*
    Allows the component to render as any valid HTML element or React component (like "div", "section", or even a custom component).

Passes all the correct props for that element or component.

Requires two specific props:

as: which tells the component what element/component to render as.

children: the ReactNode(s) it should render inside.

    ElementType: A React type that can be any valid tag name or component.

ReactNode: Anything that can be rendered (JSX, string, number, etc.).

ComponentPropsWithoutRef<T>: Gets all valid props for the given component/element type T, excluding ref.

T extends ElementType: The component accepts a generic type parameter T, which must be a valid React element type.

The type includes:

as: ElementType: Required — tells which element or component to render.

children: ReactNode: Required — content inside the component.

...ComponentPropsWithoutRef<T>: All other props allowed by the specific T.


*/
