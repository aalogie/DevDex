/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {useMutateRepository} from '@nfq/typed-next-api';

import DevelopersService from 'Application/services/DevelopersService';

/**
 * The `useEditDeveloper` useCase custom hook utilizes a mutation repository hook, `useMutateRepository`, which is responsible for managing the state and execution of data mutation operations.
 * The `useMutateRepository` hook is configured with a unique key `DevelopersList` and the `editDeveloper` method from `DevelopersService`.
 * The configuration `{revalidate: true}` suggests that after the mutation operation is completed, the related data should be revalidated or refetched to ensure the UI reflects the latest state.
 *
 * @returns The editDeveloper function trigger to be used in any other custom hook or funciton.
 * @example
 * ```ts
 * const { editDeveloper } = useEditDeveloper();
 * ```
 */
export const useEditDeveloper = () => {
    const {trigger} = useMutateRepository<typeof DevelopersService.editDeveloper>(
        'DevelopersList',
        DevelopersService.editDeveloper,
        {revalidate: true}
    );

    return {editDeveloper: trigger};
};