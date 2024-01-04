import type {HTTP_METHODS, MutationRepoArgs} from '@nfq/typed-next-api';
import type {Developer} from 'Domain/entities/Developer';

export interface DevelopersAdapter {
    /**
     * `addDeveloper` is a method that, when implemented, will asynchronously create a new developer item.
     * The method may also resolve to `undefined`, indicating that creating the new Developer was not successful, which allows for error handling or loading states in the consuming code.
     *
     * @returns A promise that resolves to the newly created Developer entry.
     */
    addDeveloper(
        key: string,
        {arg: {body, method}}: MutationRepoArgs<Developer, HTTP_METHODS.POST>
    ): Promise<Developer | undefined>;
    /**
     * `getDevelopers` is a method that, when implemented, will asynchronously retrieve a list of developer items.
     * It returns a Promise that, upon resolution, provides an array of `Developer` objects.
     * The method may also resolve to `undefined`, indicating that no developers could be retrieved, which allows for error handling or loading states in the consuming code.
     *
     * @returns A promise that resolves to an array of Developer.
     */
    getDevelopers(): Promise<Developer[] | undefined>;
}