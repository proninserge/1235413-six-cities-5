import {AuthorizationStatus} from '@constants';

const getAuthorizedStatus = (state) => state.authorizationStatus === AuthorizationStatus.AUTH;

export {getAuthorizedStatus};
