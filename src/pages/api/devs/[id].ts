import {connectable, HTTP_METHODS, TypedRoute} from '@nfq/typed-next-api';

import {DeveloperController} from 'Controllers/DeveloperController';

import {errorHandler} from 'Utils/errorHandler';
import nextConnect from 'Utils/nextConnect';

export const editDeveloper = TypedRoute(HTTP_METHODS.PATCH, DeveloperController.editDeveloper);
export const getDeveloper = TypedRoute(HTTP_METHODS.GET, DeveloperController.getDeveloperById);

export default nextConnect()
    .get(connectable(getDeveloper))
    .patch(connectable(editDeveloper))
    .handler({onError: errorHandler});