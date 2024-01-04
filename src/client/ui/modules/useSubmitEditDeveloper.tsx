import {HTTP_METHODS} from '@nfq/typed-next-api';
import {useRouter} from 'next/navigation';

import {useEditDeveloper} from 'Application/useCases/useEditDeveloper';

import type {HandleFormSubmit} from 'Shared/formHelperTypes';

interface FormData {
    communicative: number;
    efficient: number;
    experienceYears: number;
    id: string;
    imageUrl: string;
    immaculate: number;
    location: string;
    name: string;
    position: string;
    problemsolver: number;
    timely: number;
    tinker: number;
}

/**
 * The `useSubmitEditDeveloper` custom hook, is responsible for firing the `editDeveloper` method, with the body being the formData and the method `POST`. Upon successfully editing the new Developer, it then navigates back to root.
 *
 * @returns The `handleSubmit` function, making it available for use in form components.
 */
export const useSubmitEditDeveloper = () => {
    const router = useRouter();
    const {editDeveloper} = useEditDeveloper();

    /**
     * The `handleSubmit` calls the `editDeveloper` function, which comes from the useCase `useSubmitEditDeveloper`.
     * The `body` of the request is set to `values`, which represents the form data gathered from the user input. This data is expected to match the format required by the `editDeveloper` function.
     *
     * @param props         The props of the function.
     * @param props.values  Contains the form data that needs to be submitted.
     * @param props.getForm This method returns the formData submitted.
     */
    const handleSubmit: HandleFormSubmit<FormData> = async ({values}) => {
        const success = await editDeveloper({
            body: {
                experienceYears: Number(values.experienceYears),
                id: values.id,
                imageUrl: values.imageUrl || 'https://avatars.githubusercontent.com/u/45007745?v=4',
                location: values.location,
                name: values.name,
                position: values.position,
                skills: {
                    communicative: Number(values.communicative),
                    efficient: Number(values.efficient),
                    immaculate: Number(values.immaculate),
                    problemsolver: Number(values.problemsolver),
                    timely: Number(values.timely),
                    tinker: Number(values.tinker)
                }
            },
            method: HTTP_METHODS.PATCH
        });

        if (success) {
            await router.push('/');
        }
    };

    return {handleSubmit};
};