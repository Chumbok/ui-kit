export const environment = {
  production: true,
  chumbok: {
    enableMock: false,

    apiCallThroughLocalServer: true,
    apiBaseEndpointLocalServer: 'http://localhost:33012',

    /* apiCallThroughGateway: false,
     apiBaseEndpoint: '//localhost:33002'*/

    apiCallThroughGateway: false,
    apiBaseEndpoint: 'http://dev.chumbok.com:33001/gateway',

    pingEndpoint: 'http://localhost:33002/ping',
    authRefreshEndpoint: 'http://localhost:33002/refresh'

  }
};
