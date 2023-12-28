import {HTTP_STATUS} from '@nfq/typed-next-api';

import {DeveloperService} from 'Services/DeveloperService';

import type {Developer} from 'Domain/entities/Developer';
import type {NextApiRequest, NextApiResponse} from 'next';

/**
 * A.
 */
export class DeveloperController {
    /**
     * A.
     *
     * @param req
     * @param res
     * @param body
     * @param query
     * @param query.id
     * @returns A.
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
     * A.
     *
     * @returns A.
     */
    static async getDevelopers() {
        const developers = await DeveloperService.getDevelopers();

        return {
            data: developers,
            status: HTTP_STATUS.OK
        };
    }

    /**
     * A.
     *
     * @param req  A.
     * @param res  A.
     * @param body A.
     * @returns A.
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
}