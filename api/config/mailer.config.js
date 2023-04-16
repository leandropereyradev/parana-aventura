const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "glpereyraar@gmail.com",
    pass: process.env.NODEMAILER,
  },
});

module.exports.sendConfirmationEmail = (user) => {
  transporter
    .sendMail({
      from: "Paraná Aventura <glpereyraar@gmail.com>",
      to: user.email,
      subject: "Confirme su cuenta",
      html: `
      <h1>Bienvenido a Paraná Aventura</h1>
      <p>Haga click en el siguiente enlace para confirmar su cuenta</p>
      <a href="${process.env.API_URL}/users/${user.id}/confirm">CONFIRME SU CUENTA</a>
      `,
    })
    .then((info) => console.log(info))
    .catch((error) => console.log(error));
};
