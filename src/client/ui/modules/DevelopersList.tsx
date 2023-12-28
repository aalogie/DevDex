import styled from 'styled-components';

import {DeveloperPill} from 'UI/components/DeveloperPill';

import {useGetDevelopers} from 'Application/useCases/useGetDevelopers';

import type {Developer} from 'ServerDomain/entities/Developer';
import Link from 'next/link';

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
 * @todo Add true documentation!
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
            <Link href="/devs/add">Add Developer</Link>
            {data?.map((dev: Developer) => <DeveloperPill key={dev.id} devDetails={dev} />)}
        </Wrapper>
    );
};

DevelopersList.displayName = 'DevelopersList';
DevelopersList.defaultProps = {testId: 'DevelopersList'};

export {DevelopersList};

const Wrapper = styled.ul``;