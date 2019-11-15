'use strict';

const Hapi = require('@hapi/hapi');
const routes = require('./routes/routes');
const models = require('./models');
const fs = require('fs');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: '168.105.134.129',
    routes: {
      cors: true
    },
    // tls: {
    //   key: fs.readFileSync('server.key'),
    //   cert: fs.readFileSync('server.crt')
    // }
  });

  server.route(routes)

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
