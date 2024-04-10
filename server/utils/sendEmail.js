const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (name, email) => {
  console.log(name, email);

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [email],
    subject: 'Welcome to our app!',
    html: `
      <h1>Hello, ${name}!</h1>
      <p>Thank you for signing up to our app. We're excited to have you on board.</p>
      <p>Enjoy your experience with us.</p>
      <p>Best regards,<br>The Acme Team</p>
    `,
  });
  if (error) {
    return console.error({ "ERROR": error });
  }

  console.log({ "data":data });
};

module.exports = sendEmail