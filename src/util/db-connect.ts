import { create } from 'domain';
import { ConnectionNotFoundError, createConnection } from 'typeorm';

async function connect(entity: any) {
  const connection = await createConnection({
    type: 'postgres',
    host: 'localhost', // process.env.DB_ADDRESS;
    port: 3306,
    username: 'root', // change to aws sercret.username;
    password: 'admin', // change to aws secret.password;
    database: 'test', // change to aws secret.databaseName;
    entities: [entity],
    synchronize: true,
    logging: true
  });

  return connection;
}

export default connect;
