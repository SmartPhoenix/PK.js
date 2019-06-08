import fs from 'fs';
import path from 'path';

import { AdminPermission, Server } from '../../../../models';
import { parseConfig, buildConfig } from '../../../../utils/server-config-parser';

export default async (parent, args, context) => {
  /* Check for Permissions */
  if (context.user === null)
    throw new Error('You must be logged in to complete this action.');

  const requestingAdmin = await AdminPermission.findOne({
    server: args.serverID,
    admin: context.user,
  });

  if (requestingAdmin === null)
    throw new Error('You do not have permission to do that.');

  const server = await Server.findOne({
    id: args.serverID
  });

  const currentGameserverPath = path.join(
    require.resolve('gameservers'),
    `../${args.serverID}`
  );
  if (!fs.existsSync(currentGameserverPath))
    throw new Error('Server folder does not exist!');

  const configFolderPath = path.join(currentGameserverPath, '/Configs');
  if (!fs.existsSync(currentGameserverPath))
    throw new Error('Configs folder does not exist!');

  console.log(args.config.length);

  const config = buildConfig(server, args.config);

  await fs.promises.writeFile(
    path.join(configFolderPath, args.name),
    config,
    'utf8'
  );

  return {
    name: args.name,
    config: parseConfig(config),
    rawConfig: config
  };
};
