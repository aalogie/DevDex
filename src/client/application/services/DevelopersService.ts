/* eslint-disable jsdoc/require-param */
import {api} from '@nfq/typed-next-api';

import type {HTTP_METHODS, MutationRepoArgs} from '@nfq/typed-next-api';
import type {addDeveloper, getDevelopers} from 'ApiRoutes/devs';
import type {editDeveloper} from 'ApiRoutes/devs/[id]';
import type {DevelopersAdapter} from 'Domain/adapters/DevelopersAdapter';
import type {Developer} from 'Domain/entities/Developer';
import type {Developer as DeveloperWithId} from 'ServerDomain/entities/Developer';

/**
 * A.
 */
class DevelopersService implements DevelopersAdapter {
    /**
     * Asynchronous method to add a developer.
     *
     * @param key The unique key for the mutation.
     * @param arg An object containing the body and method for the HTTP request.
     *
     * @returns The newly added developer.
     */
    async addDeveloper(
        key: string,
        {arg: {body, method}}: MutationRepoArgs<Developer, HTTP_METHODS.POST>
    ) {
        const data = await api<typeof addDeveloper>('/api/devs', {
            body,
            method
        });

        if (data) {
            return {
                experienceYears: data.experienceYears,
                imageUrl: data.imageUrl,
                location: data.location,
                name: data.name,
                position: data.position,
                skills: data.skills
            };
        }

        return undefined;
    }

    /**
     * Asynchronous method to add a developer.
     *
     * @param key The unique key for the mutation.
     * @param arg An object containing the body and method for the HTTP request.
     *
     * @returns The newly added developer.
     */
    async editDeveloper(
        key: string,
        {arg: {body, method}}: MutationRepoArgs<DeveloperWithId, HTTP_METHODS.PATCH>
    ) {
        const data = await api<typeof editDeveloper>(`/api/devs/${body.id}`, {
            body,
            method
        });

        if (data) {
            return {
                experienceYears: data.experienceYears,
                imageUrl: data.imageUrl,
                location: data.location,
                name: data.name,
                position: data.position,
                skills: data.skills
            };
        }

        return undefined;
    }

    /**
     * Retrieves a list of developers.
     *
     * @returns A promise that resolves to the list of developers.
     */
    async getDevelopers() {
        try {
            const data = await api<typeof getDevelopers>('/api/devs');

            return data;
        } catch (error) {
            return undefined;
        }
    }
}

export default new DevelopersService();