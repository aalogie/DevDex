import type {ChangeEvent} from 'react';

import {Spacer} from '@nfq/react-grid';
import {observer} from 'mobx-react-lite';
import styled from 'styled-components';

import {P} from 'UI/layouts/Typography';

import {useFormField} from './hooks/useFormField';

interface ComponentProps {
    /**
     * The value with which the input field is initialized.
     */
    initialValue: number | string;
    /**
     * The label for the input field.
     */
    label: string;
    /**
     * The name attribute for the input field.
     */
    name: string;
    /**
     * The callback function to handle value changes.
     *
     * @param value The new value of the input field.
     */
    onChange(value: string): void;
    /**
     * The test ID for the input field.
     */
    testId: string;
    /**
     * The type of the input field e.g. Text, number, date etc.
     */
    type: string;
}

const defaultProps = {
    initialValue: '',
    /**
     * The default callback function to handle value changes.
     */
    onChange() {},
    // eslint-disable-next-line @nfq/sort-keys
    testId: undefined,
    type: 'text'
};

/**
 * Represents an input field component with a label, name, value change handler, style, and test ID.
 * The component renders an input field with the specified label, style, and test ID.
 * It also provides a callback function to handle value changes.
 *
 * @param props          The component properties.
 * @param props.label    The label for the input field.
 * @param props.name     The name attribute for the input field.
 * @param props.onChange The callback function to handle value changes. It takes a single parameter of type string.
 * @param props.testId   The test ID for the input field.
 * @returns The rendered InputField component.
 *
 * @example
 * ```
 * const handleChange = (value: string) => {
 *   // Handle value change
 * };
 *
 * <InputField
 *   label="title"
 *   name="title"
 *   onChange={handleChange}
 *   testId="title-field"
 * />
 * ```
 */
const InputField = observer(({initialValue, label, name, onChange, testId, type}: ComponentProps) => {
    const {handleFieldChange, value} = useFormField(name, initialValue);

    /**
     * Event handler for handling change events on an input element.
     *
     * @param event The change event.
     */
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleFieldChange(event.target.value);
        onChange(event.target.value);
    };

    return (
        <Label>
            {label}
            <Spacer y={2} />
            <Input data-cy={`${testId}-input`} name={name} type={type} value={value} onChange={handleChange} />
        </Label>
    );
}, undefined, defaultProps);

InputField.displayName = 'InputField';
InputField.defaultProps = defaultProps;

export {InputField};

export const Label = styled(P).attrs({as: 'label'})`
    display: flex;
    width: 100%;
`;

export const Input = styled.input``;