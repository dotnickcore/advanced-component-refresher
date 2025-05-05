import { ComponentPropsWithoutRef } from "react";

export type InputProps = {
    id: string;
    label: string;
} & ComponentPropsWithoutRef<'input'>

/*
    ComponentPropsWithoutRef<'input'> is a utility type from React that takes all the standard props of an HTML <input> element except the ref.

    Requires id and label to always be passed (they are custom props).

    Includes all valid HTML input attributes (like type, onChange, etc.).

    Makes a type suitable for building a reusable Input component in React.
*/