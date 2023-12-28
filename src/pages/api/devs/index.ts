import {connectable, HTTP_METHODS, TypedRoute} from '@nfq/typed-next-api';

import {DeveloperController} from 'Server/controllers/DeveloperController';
import nextConnect from 'Server/nextConnect';

import {errorHandler} from 'Server/utils/errorHandler';

const getDevelopers = TypedRoute(HTTP_METHODS.GET, DeveloperController.getDevelopers);
const addDeveloper = TypedRoute(HTTP_METHODS.POST, DeveloperController.addDeveloper);

export default nextConnect()
    .get(connectable(getDevelopers))
    .post(connectable(addDeveloper))
    .handler({onError: errorHandler});