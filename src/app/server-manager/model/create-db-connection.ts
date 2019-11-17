export class CreateDbConnection {
  connectionName: string;
  serverHost: string;
  port: number;
  username: string;
  password: string;
  databaseSchema: string;
  overSshTunnel: boolean;
  sshConnectionId?: string;
}
