export const environment = {
  production: true,
  chumbok: {
    enableMock: false,
    pingEndpoint: 'http://dev.chumbok.com:33001/gateway/uaa/ping',
    uaaApiBaseEndpoint: 'http://localhost:33002',

    dentistPointApiBaseEndPoint: 'http://dev.chumbok.com:33012',

    serverManagerApiBaseEndpoint: 'http://localhost:33020',
    apiBaseEndpointLocalServer: 'http://dev.chumbok.com:33012',

    appName: 'dentist-point'
  }
};
