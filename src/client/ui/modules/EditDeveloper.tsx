/* eslint-disable max-len */
import {Col, Container, Row, Spacer} from '@nfq/react-grid';
import styled from 'styled-components';

import {Button} from 'UI/components/Buttons/Button';
import {Form} from 'UI/components/Form';
import {InputField} from 'UI/components/Inputs/InputField';
import {InputHidden} from 'UI/components/Inputs/InputHidden';

import {H3, H4} from 'UI/layouts/Typography';

import {ButtonsWrapper} from './AddDeveloper';
import {useSubmitEditDeveloper} from './useSubmitEditDeveloper';

import type {Developer} from 'ServerDomain/entities/Developer';


/**
 * The `ComponentProps` interface defines the shape of the properties object that is expected for this component.
 * It outlines the required properties that needs to be provided when utilizing this component expecting an object of this type.
 */
interface ComponentProps {
    developer: Developer | null;
    /**
     * The `testId` property represents a unique identifier, usually in the form of a string, assigned to a component for testing purposes.
     * It is a required property and must be provided when an object of type `ComponentProps` is expected.
     * This property is crucial for uniquely identifying components during testing, allowing for more accurate and reliable tests.
     */
    testId: string;
}

/**
 * The `EditDeveloper` Component.
 *
 * @param props           The component props.
 * @param props.testId    A unique identifier, usually in the form of a string, assigned to the component for testing purposes.
 * @param props.developer The developer to be updated.
 * @returns A React element representing the `EditDeveloper` component.
 * @todo Add true documentation!
 *
 * @example
 * ```tsx
 * const MyComponent = <EditDeveloper testId="myTestId">MyComponent</EditDeveloper>;
 * ```
 */
const EditDeveloper = ({developer, testId}: ComponentProps) => {
    const {handleSubmit} = useSubmitEditDeveloper();

    return (
        <Wrapper data-cy={testId}>
            <Form id="EditDeveloper" onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <H4>Developer Info</H4>
                        <InputHidden initialValue={developer?.id} name="id" />
                        <InputField initialValue={developer?.name} label="Name" name="name" type="text" />
                        <InputField initialValue={developer?.imageUrl} label="Image Url" name="imageUrl" type="text" />
                        <InputField initialValue={developer?.location} label="Location" name="location" type="text" />
                        <InputField initialValue={developer?.position} label="Position" name="position" type="text" />
                        <InputField initialValue={developer?.experienceYears} label="XP Years" name="experienceYears" type="number" />
                    </Col>
                    <Col>
                        <H3>Developer Skills</H3>
                        <InputField initialValue={developer?.skills.communicative} label="communicative" name="communicative" type="number" />
                        <InputField initialValue={developer?.skills.immaculate} label="immaculate" name="immaculate" type="number" />
                        <InputField initialValue={developer?.skills.problemsolver} label="problemsolver" name="problemsolver" type="number" />
                        <InputField initialValue={developer?.skills.timely} label="timely" name="timely" type="number" />
                        <InputField initialValue={developer?.skills.tinker} label="tinker" name="tinker" type="number" />
                        <InputField initialValue={developer?.skills.efficient} label="efficient" name="efficient" type="number" />
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

EditDeveloper.displayName = 'EditDeveloper';
EditDeveloper.defaultProps = {testId: 'EditDeveloper'};

export {EditDeveloper};

const Wrapper = styled(Container)`
    width: fit-content;
`;

const Save = styled(Button)``;