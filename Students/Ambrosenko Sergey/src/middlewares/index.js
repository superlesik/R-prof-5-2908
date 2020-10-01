import messageMiddleware from './messageMiddleware.js';
import { apiMiddleware } from 'redux-api-middleware';

export default [
   apiMiddleware,
   messageMiddleware,
];