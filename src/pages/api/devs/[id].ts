import {connectable, HTTP_METHODS, TypedRoute} from '@nfq/typed-next-api';

import {DeveloperController} from 'Server/controllers/DeveloperController';
import nextConnect from 'Server/nextConnect';

import {errorHandler} from 'Server/utils/errorHandler';

const getDeveloper = TypedRoute(HTTP_METHODS.GET, DeveloperController.getDeveloperById);

export default nextConnect()
    .get(connectable(getDeveloper))
    .handler({onError: errorHandler});