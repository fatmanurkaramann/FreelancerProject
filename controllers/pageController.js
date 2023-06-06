const Portfolio = require('./../models/Portfolio')

exports.getHomePage = async (req, res) => {
    const portfolios = await Portfolio.find()
    const portfolio = await Portfolio.findById(req.params.id)

    res.render(
        'index',
        {
            portfolios
        }
    )
}
exports.getEditPage = async (req,res)=>{
    const portfolio = await Portfolio.findById(req.params.id)

    res.render(
        'edit',
        {portfolio},
    )
}
exports.sendEmail = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.number
    const message = req.body.messages;
    // Check if the email field is empty
    if (!email && !name && !message) {
      console.log("Email field cannot be empty.");
      res.redirect('/'); // Redirect the user back to the contact page
      return; // Exit the function to prevent sending the email
    }
  
    const outputMessage = `
      <h1>Message Details</h1>
      <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Email: ${phoneNumber}</li>
      </ul>
      <h1>Message</h1>
      <p>${message}</p>`;
      let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  
    try {
      let info = await transporter.sendMail({
        from: '"Sender Name" <sender@example.com>',
        to: 'recipient@example.com',
        subject: 'Test Email',
        text: 'This is a test email.',
        html: outputMessage,
      });
      console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
      //req.flash('success', 'We received your message succesfully')
      res.redirect('/');
    } catch (error) {
      //req.flash('error', 'Something happened wrong.')
  
      res.redirect('/');
    }
  }