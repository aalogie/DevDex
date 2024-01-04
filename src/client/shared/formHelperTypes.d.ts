/**
 * Type alias for form values.
 *
 * This type alias represents the possible form values that can be used.
 * It can be a FileList, an array of numbers, an array of strings, a number, or a string.
 */
export type FormValue = FileList | number[] | string[] | number | string;
/**
 * Type alias for form values.
 *
 * This type alias represents a record of form values, where each value is of type FormValue.
 * The keys of the record are strings.
 */
export type FormValues = Record<string, FormValue>;

/**
 * Interface for form state.
 *
 * This interface represents the state of a form.
 */
export interface FormState {
    /**
     * Add a field to the form state.
     *
     * @param name         The name of the field.
     * @param defaultValue The default value of the field.
     * @param initialValue The initial value of the field.
     */
    addField(name: string, defaultValue: FormValue, initialValue: FormValue): void;
    /**
     * Change the value of a field in the form state.
     *
     * @param name  The name of the field.
     * @param value The new value of the field.
     */
    changeValue(name: string, value: FormValue): void;
    /**
     * Delete a field from the form state.
     *
     * @param name The name of the field to delete.
     */
    deleteValue(name: string): void;
    /**
     * Errors associated with the form fields.
     *
     * Each key represents a field name, and the value is an array of error messages or null if no errors.
     */
    errors: Record<string, string[] | null>;
    /**
     * Initial values of the form fields.
     *
     * The keys represent the field names, and the values are the initial values.
     */
    initialValues: FormValues;
    /**
     * Reset the value of an specific form field to the initial value.
     */
    resetValue(name: string): void;
    /**
     * Reset the values of all form fields to their initial values.
     */
    resetValues(): void;
    /**
     * Current values of the form fields.
     *
     * The keys represent the field names, and the values are the current values.
     */
    values: FormValues;
}

/**
 * Interface for the form context type.
 *
 * This interface represents the type of the form context, which includes the form state and the form ID.
 */
export interface FormContextType {
    /**
     * The form state.
     */
    form: FormState;
    /**
     * The ID of the form.
     */
    formId: string;
}

/**
 * Type alias for handling form submission.
 *
 * This type alias represents a function that handles form submission.
 * It takes an object with properties `getForm()` and `values`, where `getForm()` returns the form data
 * and `values` represents the form values of type `T`.
 * It returns a promise that resolves to a record of error messages or void if the submission is successful.
 */
export type HandleFormSubmit<T = any> = (
    props: {getForm(): FormData; values: T}
) => Promise<Record<string, string[]> | void>;