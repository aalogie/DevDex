import {Col, Container, Row, Spacer} from '@nfq/react-grid';
import styled from 'styled-components';

import {Button} from 'UI/components/Buttons/Button';
import {Form} from 'UI/components/Form';
import {InputField} from 'UI/components/Inputs/InputField';

import {H3, H4} from 'UI/layouts/Typography';

import {useSubmitAddDeveloper} from './useSubmitAddDeveloper';

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
 * The `AddDeveloper` Component.
 *
 * @param props        The component props.
 * @param props.testId A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 * @returns A React element representing the `AddDeveloper` component.
 *
 * @example
 * ```tsx
 * const MyComponent = <AddDeveloper testId="myTestId">MyComponent</AddDeveloper>;
 * ```
 */
const AddDeveloper = ({testId}: ComponentProps) => {
    const {handleSubmit} = useSubmitAddDeveloper();

    return (
        <Wrapper data-cy={testId}>
            <Form id="AddDeveloper" onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <H4>Developer Info</H4>
                        <InputField label="Name" name="name" type="text" />
                        <InputField label="Image Url" name="imageUrl" type="text" />
                        <InputField label="Location" name="location" type="text" />
                        <InputField label="Position" name="position" type="text" />
                        <InputField label="XP Years" name="experienceYears" type="number" />
                    </Col>
                    <Col>
                        <H3>Developer Skills</H3>
                        <InputField initialValue={55} label="communicative" name="communicative" type="number" />
                        <InputField initialValue={55} label="immaculate" name="immaculate" type="number" />
                        <InputField initialValue={55} label="problemsolver" name="problemsolver" type="number" />
                        <InputField initialValue={55} label="timely" name="timely" type="number" />
                        <InputField initialValue={55} label="tinker" name="tinker" type="number" />
                        <InputField initialValue={55} label="efficient" name="efficient" type="number" />
                    </Col>
                </Row>
                <Spacer y={6} />
                <ButtonsWrapper>
                    <Save size="normal" type="submit" variant="primary" width="auto">Save</Save>
                    <Button as="link" href="/" size="normal" variant="secondary" width="auto">Cancel</Button>
                </ButtonsWrapper>
            </Form>
        </Wrapper>
    );
};

AddDeveloper.displayName = 'AddDeveloper';
AddDeveloper.defaultProps = {testId: 'AddDeveloper'};

export {AddDeveloper};

const Wrapper = styled(Container)`
    width: fit-content;
`;

const Save = styled(Button)``;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
`;