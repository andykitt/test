/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const SendGridParser = require("./SendGridParser");

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
//  GET /
//
app.get("/", (req, res) => {
  res.status(200).send(
    `<!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="description" content="SendGrid WebHook Responder">      
      <link 
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossorigin="anonymous"
      >
      <title>SendGrid WebHook Responder</title>
    </head>
    
    <body>
      <div class="container">
        <h1>📩 λ SendGrid Webhook Responder</h1>
        <p>This <code>GET / </code>tells you the microservice is working. Point the sendgrid webhook to <code>POST /event</code></p>
        <p><code>npm run dev</code></p>
        <p><code>now dev</code></p>
        <p><code>sls deploy</code></p>
      </div>
    </body>
    </html>`
  );
  // res.end();
});

//
//  POST /event
//
app.post("/event", (req, res) => {
  const events = req.body;
  const output = [];

  events.forEach(event => {
    const isFailedEvent = SendGridParser.isFailureEvent(event);
    const eventAsMessage = SendGridParser.parseEvent(event);
    // eslint-disable-next-line no-console
    console.log(eventAsMessage);
    output.push(eventAsMessage);

    if (isFailedEvent) {
      console.log(
        "ð¨ message was a failure event - will try and inform sales via email"
      );
      const emailResponse = SendGridParser.sendEventToSales(eventAsMessage)
        .then(() => console.log("ð© email sent "))
        .catch(error => {
          return console.error(`â email not sent - ${error.toString()}`);
        });

      if (emailResponse) {
        console.log(`Î» : ${emailResponse}`);
      }
    }
  });

  const response = {
    data: events,
    message: output
  };

  res.status(200).send(response);
});

//
//  / ALL OTHER ROUTES
//
app.all("*", (req, res) => {
  const response = { data: null, message: "ð¨ route not found" };
  res.status(400).send(response);
});

module.exports = app;
