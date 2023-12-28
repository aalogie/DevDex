import {api} from '@nfq/typed-next-api';

import type getDevelopers from 'ApiRoutes/devs';
import type {DevelopersAdapter} from 'Domain/adapters/DevelopersAdapter';

/**
 * A.
 */
export class DevelopersService implements DevelopersAdapter {
    /**
     * A.
     *
     * @returns A.
     */
    static async getDevelopers() {
        try {
            const data = await api<typeof getDevelopers>('/api/devs');

            return data;
        } catch (error) {
            return undefined;
        }
    }
}

export default new DevelopersService();