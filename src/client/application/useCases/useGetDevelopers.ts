import {useRepository} from '@nfq/typed-next-api';

import DevelopersService from 'Application/services/DevelopersService';

/**
 * Custom hook to retrieve the list of Developers from the backend.
 *
 * @returns An object containing the data or an error if present, as well as the loading state.
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