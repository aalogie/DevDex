import {Container, Row} from '@nfq/react-grid';

import {DevelopersList} from 'UI/modules/DevelopersList';

import type {NextPageWithLayout} from 'types/global';

/**
 * HomePage.
 *
 * @returns The component.
 */
const HomePage: NextPageWithLayout = () => (
    <Container as="main">
        <Row>
            {/* <Col><ListOfDevelopers /></Col> */}
            <DevelopersList />
        </Row>
    </Container>
);

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