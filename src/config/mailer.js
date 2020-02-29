const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, pass } = require('./mail.json');

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass }
});

transport.use('compile', hbs({
  viewEngine: {
    extName: '.html',
    partialsDir: 'src/resources/mail/confirm',
    layoutsDir: 'src/resources/mail/confirm',
    defaultLayout: 'confirmaEntidade.html',
  },
  viewPath: path.resolve('./src/resources/mail/'),
  extName: '.html',
}))



module.exports = transport;