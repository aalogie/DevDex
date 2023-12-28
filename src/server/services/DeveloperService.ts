import {prisma} from '../utils/prisma';

import type {Developer} from 'Domain/entities/Developer';

/**
 * A.
 */
export class DeveloperService {
    /**
     * A.
     *
     * @returns A.
     */
    static async getDevelopers() {
        return prisma.developer.findMany();
    }

    /**
     * A.
     *
     * @param id A.
     * @returns A.
     */
    static async getDeveloperById(id: string) {
        return prisma.developer.findUnique({where: {id}});
    }

    /**
     *
     * @param developer
     *                  `.
     */
    static async addDeveloper(developer: Developer) {
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
    }
}