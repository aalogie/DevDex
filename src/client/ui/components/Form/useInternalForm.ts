/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type {FormEventHandler} from 'react';
import {useRef} from 'react';

import {action} from 'mobx';
import {useLocalObservable} from 'mobx-react-lite';

import type {FormState, FormValue, HandleFormSubmit} from 'Shared/formHelperTypes';

/**
 * Internal Form Hook.
 *
 * This hook provides form functionality such as managing form state, handling form changes,
 * resetting the form, and submitting the form. It is designed to be used within the `FormComp`
 * component.
 *
 * @param id       The unique identifier for the form.
 * @param onSubmit The callback function triggered when the form is submitted.
 *
 * @returns An object containing the form reference, form state, and form handling functions.
 */
export const useInternalForm = (id: string, onSubmit: HandleFormSubmit) => {
    const form = useRef<HTMLFormElement>(null);
    const formFieldState = useLocalObservable<FormState>(() => ({
        errors: {},
        initialValues: {},
        values: {},
        /**
         * Add a form field to the form.
         *
         * @param name         The name of the form field.
         * @param defaultValue The default value of the form field.
         * @param initialValue The initial value of the form field.
         */
        addField(name: string, defaultValue: FormValue, initialValue: FormValue) {
            action(() => {
                if (!(name in this.values) && typeof this.values[String(name)] === 'undefined') {
                    this.values[String(name)] = defaultValue;
                }
                if (!(name in this.initialValues) && typeof this.initialValues[String(name)] === 'undefined') {
                    this.initialValues[String(name)] = initialValue;
                }
                if (!(name in this.errors) && typeof this.errors[String(name)] === 'undefined') {
                    this.errors[String(name)] = null;
                }
            })();
        },
        /**
         * Change form field values.
         *
         * @param name  The name of the form field.
         * @param value The new value of the form field.
         */
        changeValue(name: string, value: FormValue) {
            this.values[String(name)] = value;
        },
        /**
         * Deletes values from the form.
         *
         * @param name The name of the form field.
         */
        deleteValue(name: string) {
            delete this.values[String(name)];
            delete this.initialValues[String(name)];
            delete this.errors[String(name)];
        },
        /**
         * Resets an specific form field value.
         *
         * @param name The name of the form field.
         */
        resetValue(name: string) {
            if (name in this.values && typeof this.values[String(name)] !== 'undefined') {
                this.values[String(name)] = this.initialValues[String(name)];
                this.errors[String(name)] = null;
            }
        },
        /**
         * Change form field values.
         */
        resetValues() {
            Object.entries(this.initialValues).forEach(([key, objValue]) => {
                this.values[String(key)] = objValue;
            });
            Object.entries(this.errors).forEach(([key]) => {
                this.errors[String(key)] = null;
            });
        }
    }));

    /**
     * Handle form submission.
     *
     * This function is called when the form is submitted. It prevents the default form submission,
     * stops the event propagation, and calls the `onSubmit` callback with the form values and a
     * `getForm` method to retrieve the form data object.
     *
     * @param e The form event object.
     */
    const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault();
        e.stopPropagation();

        await onSubmit({
            values: formFieldState.values,
            /**
             * Gets the form data object.
             *
             * @returns The form data object.
             */
            getForm() {
                return new FormData(form.current!);
            }
        });
    };

    const formState = {
        form: formFieldState,
        formId: id
    };

    return {
        form,
        formState,
        handleSubmit
    };
};