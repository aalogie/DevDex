import {observer} from 'mobx-react-lite';
import styled from 'styled-components';

import {useFormField} from './hooks/useFormField';

/**
 * The `ComponentProps` interface defines the shape of the properties object that is expected for this component.
 * It outlines the required properties that needs to be provided when utilizing this component expecting an object of this type.
 */
interface ComponentProps {
    initialValue: string;
    name: string;
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
}

const defaultProps = {
    initialValue: '',
    testId: 'InputHidden'
};

/**
 * This input field is designed to send a particular value with the formData without having it being entered by the user.
 *
 * @param props        The component properties.
 * @param props.name   The name attribute for the input field.
 * @param props.testId The test ID for the input field.
 * @returns The rendered InputField component.
 *
 * @example
 * ```
 * const handleChange = (value: string) => {
 *   // Handle value change
 * };
 *
 * <InputField
 *   name="title"
 *   testId="title-field"
 * />
 * ```
 */
const InputHidden = observer(({initialValue, name, testId}: ComponentProps) => {
    const {value} = useFormField(name, initialValue);

    return (
        <Wrapper data-cy={testId} name={name} type="hidden" value={value} />
    );
}, undefined, defaultProps);

InputHidden.displayName = 'InputHidden';
InputHidden.defaultProps = defaultProps;

export {InputHidden};

const Wrapper = styled.input``;