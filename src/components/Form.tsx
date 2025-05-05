import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps }: FormProps,
  ref
) {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<string[]>([]);

  useImperativeHandle(ref, () => ({
    clear() {
      form.current?.reset();
      setErrors([]);
    },
  }));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const entries = Object.fromEntries(formData);

    const newErrors: string[] = [];

    // Basic required field validation
    for (const [name, value] of formData.entries()) {
      if (typeof value === 'string' && value.trim() === '') {
        newErrors.push(`${name} is required`);
      }
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    onSave(entries);
    form.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {errors.length > 0 && (
        <ul style={{ color: 'red', marginBottom: '1rem' }}>
          {errors.map((err, idx) => (
            <li key={idx}>{err}</li>
          ))}
        </ul>
      )}
      {children}
    </form>
  );
});

/*
    1. forwardRef<FormHandle, FormProps>
This enables the parent component to pass a ref to the Form component and call methods on it — in this case, clear().

export type FormHandle = {
    clear: () => void;
};
This defines the interface for what the parent can call through the ref. It's like saying:

"If you grab a ref to this form, the only thing you're allowed to do with it is clear()."

useImperativeHandle(ref, () => ({
  clear() {
    console.log('CLEARING');
    form.current?.reset();
  }
}));
This is the core magic. It tells React:

"When someone uses a ref to this component, expose a custom object — in this case, an object with a clear() method."

This is very useful when:

You want to expose specific methods (e.g., clear(), focus(), submit()) to the parent.

You don't want to expose the entire DOM node or component internals — just specific capabilities. 

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  ...
  onSave(data);
  form.current?.reset();
}
This function handles native form submission. It:

Prevents the default browser refresh.

Gathers all form data via FormData and turns it into a plain object.

Calls the onSave() prop with that data.

Clears the form afterward using .reset().

    const form = useRef<HTMLFormElement>(null);
...
<form ... ref={form}>
This ref holds a reference to the actual DOM <form> element. It's used both:

In handleSubmit() to reset the form after submit.

In the clear() method to allow the parent to reset it externally.

✅ forwardRef allows passing a ref into a functional component.

✅ useImperativeHandle gives precise control over what that ref exposes.

✅ useRef holds the actual form element so we can call .reset().

✅ This pattern allows the parent to call formRef.current.clear() safely and cleanly.
*/

export default Form;
