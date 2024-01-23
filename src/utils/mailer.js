import nodeMailer from "nodemailer";

export const sendMailToUser = (details, mailType) => {
  const { name: title, url, email: recipientAddress } = details;
  const productName = title.length > 20 ? `${title.substring(0, 20)}` : title;

  const mailSubject = {
    "Welcome": `Welcome to Price Tracking for ${productName}`,
    "Alert": "Price dropped!!!",
  };

  const mailBody = {
    "Welcome": `
      <h2>Welcome to TrackWise</h2>
      <p>Your are now tracking ${productName}</p>
      <p>Stay tuned for more updates on ${productName}</p>
      <a href="${url}">Product link</a>
    `,
    "Alert": `
      <h4>🌟 Exciting News! 🌟 The product ${productName} you've been eyeing just experienced a dazzling price drop! 🚀 Seize the opportunity and treat yourself to luxury at a new, wallet-friendly cost. 🛍️ Hurry, your dream deal awaits! ✨</h4>
      <p>Grab the product <a href="${url}" target="_blank">here</a> now.</p>
    `,
  };

  const transporter = nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_ADDRESS,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  const mailOptions = {
    from: {
      name: "Track Wise",
      address: process.env.SENDER_ADDRESS,
    },
    to: recipientAddress,
    subject: mailSubject[mailType],
    html: mailBody[mailType],
  };

  const sendMail = async (transporter, mailOptions) => {
    try {
      await transporter.sendMail(mailOptions);
      console.log("mail sent");
    } catch (err) {
      console.log(err);
    }
  };

  sendMail(transporter, mailOptions);
};
