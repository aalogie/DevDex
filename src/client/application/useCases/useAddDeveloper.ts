/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {useMutateRepository} from '@nfq/typed-next-api';

import DevelopersService from 'Application/services/DevelopersService';

/**
 * The `useAddDeveloper` useCase custom hook utilizes a mutation repository hook, `useMutateRepository`, which is responsible for managing the state and execution of data mutation operations.
 * The `useMutateRepository` hook is configured with a unique key `DevelopersList` and the `addDeveloper` method from `DevelopersService`.
 * The configuration `{revalidate: true}` suggests that after the mutation operation is completed, the related data should be revalidated or refetched to ensure the UI reflects the latest state.
 *
 * @returns The addDeveloper function trigger to be used in any other custom hook or funciton.
 * @example
 * ```ts
 * const { addDeveloper } = useAddDeveloper();
 * ```
 */
export const useAddDeveloper = () => {
    const {trigger} = useMutateRepository<typeof DevelopersService.addDeveloper>(
        'DevelopersList',
        DevelopersService.addDeveloper,
        {revalidate: true}
    );

    return {addDeveloper: trigger};
};