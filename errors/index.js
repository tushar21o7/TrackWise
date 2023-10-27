const CustomAPIError = require('./custom-api');
const BadRequestError = require('./bad-request');
const notFound = require('./not-found');
const UnauthenticatedError = require('./unauthenticated');

module.exports = {CustomAPIError,BadRequestError,notFound,UnauthenticatedError};