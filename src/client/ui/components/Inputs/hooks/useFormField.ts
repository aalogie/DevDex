import {useEffect} from 'react';

import {useFormContext} from 'UI/hooks/useFormContext';

import type {FormValue} from 'Shared/formHelperTypes';

/**
 * Form Field Hook.
 *
 * This hook provides functionality for managing a form field within a form. It retrieves the form context,
 * ensures the form field is present in the form's values and initial values, and provides the current value
 * of the form field.
 *
 * @param  name          The name of the form field.
 * @param  defaultValue  The default value for the form field.
 * @param  resetValue    The value to reset the form field to when the form is reset (optional).
 * @param  keepOnUnmount Determines whether the form field value should persist on unmount (default: false).
 *
 * @returns An object containing the form ID, form change handler, and the current value of the form field.
 *
 * @throws {Error} If `useFormField` is used outside a `FormProvider` component.
 *
 * @example
 * ```tsx
 * const MyFormComponent = () => {
 *   const { formId, handleFormChange, value } = useFormField('username', '');
 *
 *   return (
 *     <div>
 *       <label htmlFor={formId}>Username</label>
 *       <input
 *         type="text"
 *         id={formId}
 *         value={value}
 *         onChange={e => handleFormChange('username', e.target.value)}
 *       />
 *     </div>
 *   );
 * };
 * ```
 */
export const useFormField = <T extends FormValue>(
    name: string,
    defaultValue: T,
    resetValue: T | undefined = undefined,
    keepOnUnmount = false
) => {
    const formContext = useFormContext();

    if (!formContext) {
        throw new Error('useFormField must be used within a FormProvider');
    }

    const {form, formId} = formContext;

    form.addField(name, defaultValue, resetValue ?? defaultValue);

    /**
     * Form field change handler.
     *
     * @param value The new value of the form field.
     */
    const handleFieldChange = (value: string[] | string) => {
        form.changeValue(name, value);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        form.addField(name, defaultValue, resetValue ?? defaultValue);

        return () => {
            if (!keepOnUnmount) {
                form.deleteValue(name);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        error: form.errors[String(name)],
        formId,
        handleFieldChange,
        value: form.values[String(name)] as T
    };
};