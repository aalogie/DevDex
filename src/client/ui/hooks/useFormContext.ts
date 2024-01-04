import {useContext} from 'react';

import {FormContext} from 'UI/components/Form';

/**
 * Hook for accessing the form context.
 *
 * This hook provides access to the form context, allowing components
 * within a form to access and interact with the form state and functions.
 *
 * @returns The form context object.
 *
 * @example
 * ```tsx
 *   const formContext = useFormContext();
 * ```
 */
export const useFormContext = () => useContext(FormContext);