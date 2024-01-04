import styled from 'styled-components';

import {Button} from 'UI/components/Buttons/Button';
import {DeveloperPill} from 'UI/components/DeveloperPill';

import {useGetDevelopers} from 'Application/useCases/useGetDevelopers';

import type {Developer} from 'ServerDomain/entities/Developer';

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
 * The `DevelopersList` Component.
 *
 * @param props        The component props.
 * @param props.testId A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 * @returns A React element representing the `DevelopersList` component.
 *
 * @example
 * ```tsx
 * const MyComponent = <DevelopersList testId="myTestId">MyComponent</DevelopersList>;
 * ```
 */
const DevelopersList = ({testId}: ComponentProps) => {
    const {data} = useGetDevelopers();

    if (!data) return <h1>Loading...</h1>;

    return (
        <Wrapper data-cy={testId}>
            <Button as="link" href="/devs/add" size="normal" variant="secondary" width="auto">Add Developer</Button>
            <ListWrapper>
                {(data as Developer[]).map((dev: Developer) => <DeveloperPill key={dev.id} devDetails={dev} />)}
            </ListWrapper>
        </Wrapper>
    );
};

DevelopersList.displayName = 'DevelopersList';
DevelopersList.defaultProps = {testId: 'DevelopersList'};

export {DevelopersList};

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
`;

const ListWrapper = styled.ul`
    padding: 0;
`;