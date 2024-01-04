import {createContext} from 'react';

import {observer} from 'mobx-react-lite';
import styled from 'styled-components';

import {useInternalForm} from './useInternalForm';

import type {FormContextType, HandleFormSubmit} from 'Shared/formHelperTypes';
import type {WithChildren} from 'types/global';

export const FormContext = createContext<FormContextType | null>(null);

interface ComponentProps {
    /**
     * The class name of the component.
     */
    className: string;
    /**
     * The ID of the component.
     */
    id: string;
    /**
     * The function that handles the submit event of the form.
     */
    onSubmit: HandleFormSubmit;
    /**
     * The test ID used for identifying the component in tests.
     */
    testId: string;
}

const defaultProps = {
    className: undefined,
    // eslint-disable-next-line @nfq/sort-keys
    testId: undefined
};

/**
 * Form Component.
 *
 * This component provides a wrapper for form elements and manages the form state,
 * submission, and resetting. It utilizes the `useInternalForm` hook to handle form
 * functionality.
 *
 * @param props           The component props.
 * @param props.children  The children components.
 * @param props.className The CSS class name for the form component.
 * @param props.id        The unique identifier for the form component.
 * @param props.onReset   The callback function triggered when the form is reset.
 * @param props.onSubmit  The callback function triggered when the form is submitted.
 * @param props.testId    The test id for testing purposes.
 *
 * @returns The form component.
 *
 * @example
 * ```tsx
 * const MyForm = () => {
 *   const handleSubmit = (data) => {
 *     // Handle form submission
 *   };
 *
 *   const handleReset = () => {
 *     // Handle form reset
 *   };
 *
 *   return (
 *     <FormComp onSubmit={handleSubmit} onReset={handleReset}>
 *         Children etc.
 *     </FormComp>
 *   );
 * };
 * ```
 */
const Form = observer(({children, className, id, onSubmit, testId}: WithChildren<ComponentProps>) => {
    const {form, formState, handleSubmit} = useInternalForm(id, onSubmit);

    return (
        <FormElement
            ref={form}
            className={className}
            data-cy={testId}
            id={id}
            onSubmit={handleSubmit}
        >
            <FormContext.Provider value={formState}>
                {children}
            </FormContext.Provider>
        </FormElement>
    );
}, undefined, defaultProps);

Form.displayName = 'Form';
Form.defaultProps = defaultProps;

export {Form};

const FormElement = styled.form``;