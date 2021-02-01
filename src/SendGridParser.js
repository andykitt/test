const emailer = require('@sendgrid/mail');

class SendGridParser {
  static get allEvents() {
    return [
      'processed',
      'deferred',
      'delivered',
      'open',
      'click',
      'bounce',
      'dropped',
      'spamreport',
      'unsubscribe',
      'group_unsubscribe',
      'group_resubscribe',
    ];
  }

  static get failedEvents() {
    return [
      'bounce',
      'dropped',
      'spamreport',
      'unsubscribe',
      'group_unsubscribe',
    ];
  }

  static isFailureEvent(event) {
    const currentEventType = event.event;
    const isFailure = SendGridParser.failedEvents.includes(currentEventType);
    return isFailure;
  }

  static parseEvent(event) {
    if (!event) {
      return 'ð¨ event parameter is null - this is not working';
    }

    const { email } = event;
    const evt = event.event;
    const category = event.category || 'N/A';
    const reason = event.reason || 'N/A';
    const status = event.status || 'N/A';

    if (SendGridParser.isFailureEvent(event)) {
      return `â Reporting a FAIL event to email '${email}' due to event '${evt}' with a reason of '${reason}' and category '${category}' and status '${status}'`;
    }
    return `â Reporting a SUCCESS event to '${email}' due to event '${evt}' with a reason of '${reason}' and category '${category}' and status '${status}'`;
  }

  static async sendEventToSales(message) {
    emailer.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: process.env.EMAIL_TO || 'john@foremost-magnets.com',
      cc: process.env.EMAIL_CC || 'john@foremost-magnets.com',
      from: process.env.EMAIL_FROM || 'john@foremost-magnets.com',
      subject: process.env.EMAIL_SUBJECT || 'Database email not sent',
      text: message,
      html: message,
    };

    return emailer.send(msg);

    //
    // let response = '';
    // try {
    //   emailer
    //     .send(msg)
    //     .then(() => {
    //       const success = `â email sent to ${msg.to}`;
    //       // eslint-disable-next-line no-console
    //       console.log(success);
    //       response = success;
    //     })
    //     .catch((error) => {
    //       const output = `â email not sent : with error ${error.toString()}`;
    //       // eslint-disable-next-line no-console
    //       console.error(output);
    //       response = output;
    //     });
    // } catch (e) {
    //   // eslint-disable-next-line no-console
    //   console.error(e);
    //   response = `ð¨ error sending email : ${e}`;
    // }

    // return response;
  }
}

module.exports = SendGridParser;
