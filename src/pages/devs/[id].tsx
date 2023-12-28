/* eslint-disable react/jsx-props-no-spreading */
import {Col, Container, Row, Spacer} from '@nfq/react-grid';
import Link from 'next/link';

import {DeveloperCard} from 'UI/components/DeveloperCard';
import {DeveloperRadar} from 'UI/components/DeveloperRadar';

import {DeveloperService} from 'Services/DeveloperService';

import type {GetServerSideProps} from 'next';
import type {ParsedUrlQuery} from 'querystring';
import type {Developer} from 'ServerDomain/entities/Developer';
import type {NextSSRPageWithLayout} from 'types/global';

/**
 * The `ServerSideProps` interface defines the shape of the properties object for this page.
 * It outlines the required properties that needs to be provided when utilizing this page with server side rendering.
 * This interface is crucial for ensuring the correct usage of components or functions and for providing TypeScript type checking and IntelliSense support in IDEs.
 */
interface ServerSideProps {
    details: Developer;
}

/**
 * The `Id` component is a Next.js page component.
 * It is used as a route and can be accessed throught the nextjs router.
 *
 * @param props         The props object containing the properties for this page.
 * @param props.details A.
 * @returns A ReactNode representing the `Id` page.
 */
const Id: NextSSRPageWithLayout<typeof getServerSideProps> = ({details}) => (
    <Container as="section" isFluid>
        <Spacer y={10} />
        <Row align="center">
            <Col align="center">
                <DeveloperCard details={details} />
            </Col>
            <Col>
                <DeveloperRadar details={details} />
            </Col>
        </Row>
        <Link href="/">Back</Link>
    </Container>
);

/**
 * `getLayout` is a static property of the `Id` component that is a function designed to wrap the component with a specified layout.
 * It receives the router object, page properties, and the PageComponent and returns the PageComponent wrapped with the necessary layout and properties.
 * This property is essential for applying consistent layouts across different pages in the application.
 *
 * @param router        The Next.js router object representing the current route of the application.
 * @param pageProps     The page properties object representing the properties of the current page.
 * @param PageComponent The PageComponent representing the current page.
 * @returns A ReactNode representing the PageComponent wrapped with the necessary layout and properties.
 *
 * @example
 * ```tsx
 * const LayoutWrappedComponent = Id.getLayout(router, pageProps, PageComponent);
 * ```
 */
Id.getLayout = (router, pageProps, PageComponent) => (
    <PageComponent router={router} {...pageProps} />
);

/**
 * `getLayoutKey` is a static property of the `Id` component that is a function designed to return the layout key string.
 * It is used to determine if the layout changed between pages to apply transitions between different layouts.
 * This property is crucial for managing different layouts within the application and for providing a specific layout key for the `Id` component.
 *
 * @returns A string representing the layout key.
 *
 * @example
 * ```tsx
 * const layoutKey = Id.getLayoutKey();
 * ```
 */
Id.getLayoutKey = () => '';

export default Id;

/**
 * The `ServerSideParams` interface extends the `ParsedUrlQuery` interface and is designed to represent the structure of the parameters object, specifically for server rendered paths.
 * It adds an additional properties to the base `ParsedUrlQuery` interface, allowing for the correct typing of these in the `getServerSideProps` function.
 * This interface is crucial for ensuring the correct usage and structure of parameters in functions or components that deal with server rendered paths, providing TypeScript type checking and IntelliSense support in IDEs.
 */
interface ServerSideParams extends ParsedUrlQuery {
    id: string;
}

/**
 * `getServerSideProps` is a Next.js function designed to fetch data on each request and pass it as props to the page.
 * It is used in the context of Server-side Rendering and is crucial for pages that need to perform data fetching on every request, allowing for real-time data fetching and SEO optimization.
 * This function is essential for fetching the necessary data required by a page and providing it as props, ensuring the correct and up-to-date data is available during the rendering process.
 *
 * @param context The context object contains parameters of the server-side page, including `params` which holds the dynamic segments of the route.
 * @returns A promise resolving to an object containing the `props` to be passed to the page component.
 */
export const getServerSideProps: GetServerSideProps<ServerSideProps, ServerSideParams> = async context => {
    const {id} = context.params!;

    const details = await DeveloperService.getDeveloperById(id);

    return {props: {details}};
};