import {connectable, HTTP_METHODS, TypedRoute} from '@nfq/typed-next-api';

import {DeveloperController} from 'Controllers/DeveloperController';

import {errorHandler} from 'Utils/errorHandler';
import nextConnect from 'Utils/nextConnect';

export const addDeveloper = TypedRoute(HTTP_METHODS.POST, DeveloperController.addDeveloper);
export const getDevelopers = TypedRoute(HTTP_METHODS.GET, DeveloperController.getDevelopers);

export default nextConnect()
    .get(connectable(getDevelopers))
    .post(connectable(addDeveloper))
    .handler({onError: errorHandler});