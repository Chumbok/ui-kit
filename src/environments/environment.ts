// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  chumbok: {
    enableMock: true,

    // apiCallThroughGateway: true,
    // apiBaseEndpoint: 'http://localhost:33001/gateway'

    /* apiCallThroughGateway: false,
     apiBaseEndpoint: '//localhost:33002'*/

    apiCallThroughGateway: true,
    apiBaseEndpoint: 'http://dev.chumbok.com:33001/gateway/'
  }

};
