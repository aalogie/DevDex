import {Col, Container, Row, Spacer} from '@nfq/react-grid';
import styled from 'styled-components';

import {H2} from 'UI/layouts/Typography';
import {DevelopersList} from 'UI/modules/DevelopersList';

import type {NextPageWithLayout} from 'types/global';

/**
 * HomePage.
 *
 * @returns The component.
 */
const HomePage: NextPageWithLayout = () => (
    <Container as="main">
        <Spacer y={4} />
        <Heading>Developers Dex</Heading>
        <Row>
            <Col>
                <DevelopersList />
            </Col>
        </Row>
    </Container>
);

const Heading = styled(H2)`
    text-align: center;
`;

/**
 * Gets the layout for this page.
 *
 * @param router        The router object from nextjs.
 * @param pageProps     All page props given from server.
 * @param PageComponent The page component to render.
 *
 * @returns The complete page.
 */
/* eslint-disable-next-line react/jsx-props-no-spreading */
HomePage.getLayout = (router, pageProps, PageComponent) => <PageComponent router={router} {...pageProps} />;

/**
 * Gets the layout key for the used layout.
 *
 * @returns The complete page.
 */
HomePage.getLayoutKey = () => '';

export default HomePage;