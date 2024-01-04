import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import type {Developer} from 'ServerDomain/entities/Developer';

/**
 * The `ComponentProps` interface defines the shape of the properties object that is expected for this component.
 * It outlines the required properties that needs to be provided when utilizing this component expecting an object of this type.
 */
interface ComponentProps {
    /**
     * The information of a developer that are needed to be stored for each added developer.
     */
    devDetails: Developer;
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
}

/**
 * The `DeveloperPill` Component.
 *
 * @param props            The component props.
 * @param props.testId     A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 * @param props.devDetails An object of type `Developer` which contains all the relevant information of a developer.
 * @returns A React element representing the `DeveloperPill` component.
 *
 * @example
 * ```tsx
 * const MyComponent = <DeveloperPill devDetails={details} testId="myTestId">MyComponent</DeveloperPill>;
 * ```
 */
const DeveloperPill = ({devDetails, testId}: ComponentProps) => (
    <Wrapper data-cy={testId}>
        <Image alt="dev_image" height={44} src={devDetails.imageUrl} width={44} />
        <Link href={`/devs/${devDetails.id}`}>
            <h2>{devDetails.name}</h2>
        </Link>
    </Wrapper>
);

DeveloperPill.displayName = 'DeveloperPill';
DeveloperPill.defaultProps = {testId: 'DeveloperPill'};

export {DeveloperPill};

const Wrapper = styled.li`
    background-color: ${({theme}) => theme.colors.primaryActionColor};
    border-radius: 1rem;
    display: flex;
    font-family: ${({theme}) => theme.fonts.Lato};
    list-style: none;
    margin: 1rem;
    overflow: hidden;

    a {
        color: white;
        letter-spacing: 1px;
        padding: 0 1rem;
        text-align: center;
        text-decoration: none;
    }

    :hover {
        outline: 2px solid ${({theme}) => theme.colors.primaryActionFontColor};
    }
`;