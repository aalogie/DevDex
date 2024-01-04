import {Spacer} from '@nfq/react-grid';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import {H3, H4} from 'UI/layouts/Typography';

import type {Developer} from 'ServerDomain/entities/Developer';

/**
 * The `ComponentProps` interface defines the shape of the properties object that is expected for this component.
 * It outlines the required properties that needs to be provided when utilizing this component expecting an object of this type.
 */
interface ComponentProps {
    /**
     * The information of a developer that are needed to be stored for each added developer.
     */
    details: Developer;
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
}

/**
 * The `DeveloperCard` Component.
 *
 * @param props         The component props.
 * @param props.testId  A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 * @param props.details The information of a developer that are needed to be stored for each added developer.
 * @returns A React element representing the `DeveloperCard` component.
 *
 * @example
 * ```tsx
 * const MyComponent = <DeveloperCard details={devDetails} testId="myTestId">MyComponent</DeveloperCard>;
 * ```
 */
const DeveloperCard = ({details, testId}: ComponentProps) => (
    <Wrapper data-cy={testId}>
        <Link href={`/devs/${details.id}/edit`}>edit</Link>
        <Image
            alt={details.name}
            height={280}
            src={details.imageUrl}
            width={280}
        />
        <Spacer y={4} />
        <DetailsWrapper>
            <H3>{details.name}</H3>
            <H4>{details.position}</H4>
            <H4>{details.experienceYears} years xp</H4>
            <H4>{details.location}</H4>
        </DetailsWrapper>
    </Wrapper>
);

DeveloperCard.displayName = 'DeveloperCard';
DeveloperCard.defaultProps = {testId: 'DeveloperCard'};

export {DeveloperCard};

const Wrapper = styled.div`
    background-color: #929292;
    border-radius: 1rem;
    overflow: hidden;
    width: 28rem;
`;

const DetailsWrapper = styled.div`
    text-align: center;
`;