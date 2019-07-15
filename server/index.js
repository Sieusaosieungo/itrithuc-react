/* eslint-disable no-console */

const express = require('express');
const next = require('next');
const opn = require('opn'); // eslint-disable-line
const ngrok = require('ngrok'); // eslint-disable-line
const compression = require('compression');
require('dotenv').config();

const PORT = process.env.PORT; // eslint-disable-line
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());

    server.get('/truyen-noi/:id', (req, res) =>
      app.render(req, res, '/truyen-noi', { id: req.params.id }),
    );

    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, async err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
      if (dev) {
        if (process.env.START_TUNNEL) {
          try {
            const url = await ngrok.connect({
              proto: 'http',
              addr: PORT,
              authtoken: process.env.AUTH_TOKEN,
              region: 'ap',
            });
            console.log(`Proxy: ${url}`);
            opn(url, { app: 'google chrome' });
            opn(`http://localhost:${PORT}`, { app: 'google chrome' });
          } catch (e) {
            console.error(e);
          }
        } else {
          opn(`http://localhost:${PORT}`, { app: 'google chrome' });
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (process.env.START_TUNNEL) {
          try {
            const url = await ngrok.connect({
              proto: 'http',
              addr: PORT,
              authtoken: process.env.AUTH_TOKEN,
              region: 'ap',
            });
            console.log(`Proxy: ${url}`);
            opn(url, { app: 'google chrome' });
          } catch (e) {
            console.error(e);
          }
        }
      }
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
