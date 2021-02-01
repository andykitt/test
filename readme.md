# SendGrid Webhook Responder

Includes :

* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`

Development utilities:

* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [snyk](https://www.npmjs.com/package/snyk)
  * Snyk helps you find, fix and monitor known vulnerabilities in Node.js npm dependencies
* [serverless](https://serverless.com/)
  * Serverless makes building and deploying to aws lambda easier. It creates the functions, api gateways and cloudformation stacks needed to run functions as a service. 
* [now.sh](https://zeit.co/docs/v2/getting-started/introduction-to-now/)
  * now.sh makes deploying and hosting projects as simple as hitting `now` on the command line. 

## Setup

When working on different machines it makes sense to remove the `node_modules` folder first then run `npm install` again
to ensure paths are correct and modules can be found.

```
rm -rf node_modules
npm install
```

## Development

```
npm run dev
```

## Package Audit with snyk

```
npm run audit
```

## Run

```
npm run start
```

## now.sh deployments

So, while it can also be hosted on `amazon web services` it started life as a `codesandbox.io` project then it got upgraded
to a `now.sh` project.

It was deployed to `https://sendgrid-webhook-parser.solrevdev.now.sh/` and it was also aliased to `https://sendgrid-webhook-parser.clouds.sh/`

```
now                                                         # to deploy 
now dev                                                     # to test deployment 
now logs https://sendgrid-webhook-parser.solrevdev.now.sh/  # to view logs

```

## Serverless

https://sendgrid-webhook-parser.solrevdev.now.sh/event

https://2zg6rbcxqk.execute-api.eu-west-1.amazonaws.com/dev/event

```
serverless offline

sls offline

serverless deploy

serverless logs -f app

sls logs -f app

serverless remove

sls deploy

sls remove
```

## Postman

The file `sendgrid.postman_collection.json` should contain some requests to test the `/` and the `/event` endpoints.

This is an example of a post to `/event`

```json


[
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"processed",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"deferred",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "response":"400 try again later",
      "attempt":"5"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"delivered",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "response":"250 OK"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"open",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"255.255.255.255"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"click",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"255.255.255.255",
      "url":"http://www.sendgrid.com/"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"bounce",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "reason":"500 unknown recipient",
      "status":"5.0.0"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"dropped",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "reason":"Bounced Address",
      "status":"5.0.0"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"spamreport",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"unsubscribe",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id"
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"group_unsubscribe",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"255.255.255.255",
      "url":"http://www.sendgrid.com/",
      "asm_group_id":10
   },
   {
      "email":"example@test.com",
      "timestamp":1513299569,
      "smtp-id":"<14c5d75ce93.dfd.64b469@ismtpd-555>",
      "event":"group_resubscribe",
      "category":"cat facts",
      "sg_event_id":"sg_event_id",
      "sg_message_id":"sg_message_id",
      "useragent":"Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
      "ip":"000.000.000.000",
      "url":"http://www.sendgrid.com/",
      "asm_group_id":10
   }
]


```
