import styled from 'styled-components';

import type {WithChildren} from 'types/global';

/**
 * The `ComponentProps` interface defines the shape of the properties object that is expected for this component.
 * It outlines the required properties that needs to be provided when utilizing this component expecting an object of this type.
 */
interface ComponentProps {
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
}

/**
 * The `DeveloperForm` Component.
 *
 * @param props        The component props.
 * @param props.testId A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 * @returns A React element representing the `DeveloperForm` component.
 * @todo Add true documentation!
 *
 * @example
 * ```tsx
 * const MyComponent = <DeveloperForm testId="myTestId">MyComponent</DeveloperForm>;
 * ```
 */
const DeveloperForm = ({testId}: WithChildren<ComponentProps>) => (
    <Wrapper data-cy={testId}>DeveloperForm</Wrapper>
);

DeveloperForm.displayName = 'DeveloperForm';
DeveloperForm.defaultProps = {testId: 'DeveloperForm'};

export {DeveloperForm};

const Wrapper = styled.div``;