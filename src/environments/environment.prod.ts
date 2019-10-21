export const environment = {
  production: true,
  chumbok: {
    enableMock: false,
    apiCallThroughLocalServer: true,
    apiCallThroughGateway: false,
    apiBaseEndpoint: 'http://dev.chumbok.com:33001/gateway',
    pingEndpoint: 'http://dev.chumbok.com:33001/gateway/uaa/ping',
    authRefreshEndpoint: 'http://dev.chumbok.com:33001/gateway/uaa/refresh',
    apiBaseEndpointLocalServer: 'http://dev.chumbok.com:33012'
  }
};
