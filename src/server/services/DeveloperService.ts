import {prisma} from '../utils/prisma';

import type {Developer} from 'Domain/entities/Developer';

/**
 * Service class for developer-related operations.
 */
export class DeveloperService {
    /**
     * This method is designed to add a developer in the database.
     *
     * @param developer The new developer data to be saved that conforms to the custom type `Developer`.
     * @returns The added developer object.
     *
     * @example
     * ```ts
     * const addDeveloper = await DeveloperService.addDeveloper(developer);
     * ```
     */
    static async addDeveloper(developer: Developer) {
        try {
            const addedDeveloper = await prisma.developer.create({
                data: {
                    experienceYears: developer.experienceYears,
                    imageUrl: developer.imageUrl,
                    location: developer.location,
                    name: developer.name,
                    position: developer.position,
                    skills: {...developer.skills}
                }
            });

            return addedDeveloper;
        } catch (error) {
            return undefined;
        }
    }

    /**
     * This method is designed to edit a developer in the database.
     *
     * @param id        The id of the developer to be updated.
     * @param developer The new developer data to be updated that conforms to the custom type `Developer`.
     * @returns The edited developer object.
     *
     * @example
     * ```ts
     * const editDeveloper = await DeveloperService.editDeveloper(id, developer);
     * ```
     */
    static async editDeveloper(id: string, developer: Developer) {
        try {
            const addedDeveloper = await prisma.developer.update({
                data: {
                    experienceYears: developer.experienceYears,
                    imageUrl: developer.imageUrl,
                    location: developer.location,
                    name: developer.name,
                    position: developer.position,
                    skills: {...developer.skills}
                },
                where: {id}
            });

            return addedDeveloper;
        } catch (error) {
            return undefined;
        }
    }

    /**
     * Returns a list of all developers.
     *
     * @returns All developers currently in the database.
     */
    static async getDevelopers() {
        return prisma.developer.findMany();
    }

    /**
     * Returns a specific developer that matches the param `id`.
     *
     * @param id The unique identifier.
     * @returns A developer currently in the database.
     */
    static async getDeveloperById(id: string) {
        return prisma.developer.findUnique({where: {id}});
    }
}