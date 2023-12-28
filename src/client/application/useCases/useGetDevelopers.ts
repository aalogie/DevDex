import {useRepository} from '@nfq/typed-next-api';

import {DevelopersService} from 'Application/services/DevelopersService';

/**
 * A.
 *
 * @returns A.
 */
export const useGetDevelopers = () => {
    const {data, error, isValidating} = useRepository<typeof DevelopersService.getDevelopers>(
        'DevelopersList',
        DevelopersService.getDevelopers,
        {
            body: [],
            revalidateOnFocus: false
        }
    );

    return {
        data,
        error,
        isValidating
    };
};