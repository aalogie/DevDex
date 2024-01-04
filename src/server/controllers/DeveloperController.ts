import {HTTP_STATUS} from '@nfq/typed-next-api';

import {DeveloperService} from 'Services/DeveloperService';

import type {Developer} from 'Domain/entities/Developer';
import type {NextApiRequest, NextApiResponse} from 'next';

/**
 * The `DeveloperController` class is a class with static methods that handle requests related to Developer entity.
 */
export class DeveloperController {
    /**
     * Creates a new Developer.
     *
     * This method creates a new Developer using the DeveloperService.
     *
     * @param req  A request object.
     * @param res  A response object.
     * @param body An object containing the data for the new Developer.
     * @returns A promise that resolves to an object containing the newly created Developer and a status code.
     *
     * @example
     * ```tsx
     * const response = await DeveloperController.addDeveloper(req, res, body);
     * ```
     */
    static async addDeveloper(req: NextApiRequest, res: NextApiResponse, body: Developer) {
        try {
            const newDeveloper = await DeveloperService.addDeveloper(body);

            return {
                data: newDeveloper,
                status: HTTP_STATUS.OK
            };
        } catch (error) {
            return {
                error,
                status: HTTP_STATUS.BAD_REQUEST
            };
        }
    }

    /**
     * Update a certain Developer.
     *
     * This method update a certain Developer based on the developer id using the DeveloperService.
     *
     * @param req      A request object.
     * @param res      A response object.
     * @param body     An object containing the data for the new Developer.
     * @param query    The query parameters from the request.
     * @param query.id The id of the developer document to be updated.
     * @returns A promise that resolves to an object containing the newly created Developer and a status code.
     *
     * @example
     * ```tsx
     * const response = await DeveloperController.editDeveloper(req, res, body);
     * ```
     */
    static async editDeveloper(req: NextApiRequest, res: NextApiResponse, body: Developer, query: {id: string}) {
        try {
            const updatedDeveloper = await DeveloperService.editDeveloper(query.id, body);

            return {
                data: updatedDeveloper,
                status: HTTP_STATUS.OK
            };
        } catch (error) {
            return {
                error,
                status: HTTP_STATUS.BAD_REQUEST
            };
        }
    }

    /**
     * Gets one Developer by ID if it is available.
     *
     * @param req      The Next API request object.
     * @param res      The Next API response object.
     * @param body     The body of the request. This is not used in this function.
     * @param query    The query parameters from the request. This should include the ID of the Developer to retrieve.
     * @param query.id The ID of the Developer document to retrieve from DB.
     * @returns The Developer if found and a status code.
     */
    static async getDeveloperById(
        req: NextApiRequest,
        res: NextApiResponse,
        body: undefined,
        query: {id: string}
    ) {
        const developer = await DeveloperService.getDeveloperById(query.id);

        return {
            data: developer,
            status: HTTP_STATUS.OK
        };
    }

    /**
     * Gets all Developers from Database.
     *
     * @returns An array of Developers and status code.
     */
    static async getDevelopers() {
        const developers = await DeveloperService.getDevelopers();

        return {
            data: developers,
            status: HTTP_STATUS.OK
        };
    }
}