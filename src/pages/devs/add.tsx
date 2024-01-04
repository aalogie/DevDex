/* eslint-disable react/jsx-props-no-spreading */
import {Container, Spacer} from '@nfq/react-grid';

import {H2} from 'UI/layouts/Typography';
import {AddDeveloper} from 'UI/modules/AddDeveloper';

import type {NextSSRPageWithLayout} from 'types/global';

/**
 * The `Add` component is a Next.js page component.
 * It is used as a route and can be accessed throught the nextjs router.
 *
 * @param props.id The `id` property represents a unique identifier, usually in the form of a string.
 * @returns A ReactNode representing the `Add` page.
 */
const Add: NextSSRPageWithLayout<typeof getServerSideProps> = () => (
    <Container as="section" isFluid>
        <H2 style={{textAlign: 'center'}}>Add a new Developer</H2>
        <Spacer y={6} />
        <AddDeveloper />
    </Container>
);

/**
 * `getLayout` is a static property of the `Add` component that is a function designed to wrap the component with a specified layout.
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
 * const LayoutWrappedComponent = Add.getLayout(router, pageProps, PageComponent);
 * ```
 */
Add.getLayout = (router, pageProps, PageComponent) => (
    <PageComponent router={router} {...pageProps} />
);

/**
 * `getLayoutKey` is a static property of the `Add` component that is a function designed to return the layout key string.
 * It is used to determine if the layout changed between pages to apply transitions between different layouts.
 * This property is crucial for managing different layouts within the application and for providing a specific layout key for the `Add` component.
 *
 * @returns A string representing the layout key.
 *
 * @example
 * ```tsx
 * const layoutKey = Add.getLayoutKey();
 * ```
 */
Add.getLayoutKey = () => '';

export default Add;

/**
 * `getServerSideProps` is a Next.js function designed to fetch data on each request and pass it as props to the page.
 * It is used in the context of Server-side Rendering and is crucial for pages that need to perform data fetching on every request, allowing for real-time data fetching and SEO optimization.
 * This function is essential for fetching the necessary data required by a page and providing it as props, ensuring the correct and up-to-date data is available during the rendering process.
 *
 * @returns A promise resolving to an object containing the `props` to be passed to the page component.
 */
export const getServerSideProps = () => ({props: {}});