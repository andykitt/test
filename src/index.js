const serverless = require('serverless-http');
const app = require('./app');

require('dotenv').config();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('ð§ SendGrid Webhook Responder now listening on port %d', port);
});

module.exports.handler = serverless(app);
