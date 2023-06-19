const nodemailer = require('nodemailer');

exports.sendMail = (req, res, next) => {
  const formData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    object: req.body.object,
    message: req.body.message
  };

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ovh.net',
    port: 587,
    secure: false, // true pour les connexions SSL
    auth: {
      user: 'contact@dito-pro.fr',
      pass: 'YSVgB3Hn_AcLX,8'
    }
  });

  const mailOptions = {
    from: formData.email,
    to: 'contact@dito-pro.fr',
    subject: 'Nouveau message de ' + formData.firstname + ' ' + formData.lastname,
    text: formData.message,
    replyTo: formData.email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail' });
    } else {
      console.log('E-mail envoyé : ' + info.response);
      res.status(200).json({ message: 'E-mail envoyé avec succès' });
    }
  });
};
