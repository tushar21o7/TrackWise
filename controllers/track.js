const cheerio = require('cheerio');
const request = require('request');
const nodemailer = require('nodemailer');

const trackProduct =  (req, res) => {
    const {email, price, productURL} = req.body;
    const url = productURL; 
    request(url,cb);
    async function cb(err,res,html) {
        if(err) {
            console.log(err);
        } else {
           await getHtml(html);
        }
    }
 
    async function getHtml(html) {
        let $ = await cheerio.load(html);
        const priceString = $('div').find('._30jeq3._16Jk6d').text(); 

        let currentPrice = "";

        for(let i=0; i<priceString.length; i++){
            if(priceString[i]>='0' && priceString[i]<='9') currentPrice += priceString[i];
        }
      
        if(Number(currentPrice) <= Number(price)) {
           console.log('hey');
           res.status(200).json({msg: "Price dropped"});
        } else {
           res.status(200).json({msg: "No hopes"});
        }
    }
    // sendEmail();
}

function sendEmail() {
    const mailOptions = {
      from: 'tusharmishra2107@gmail.com',
      to: 'tusharmishra969@gmail.com',
      subject: `Node mailer working...`,
      html: `<p>Go and buy it now </p>`
    };
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            
        }
    });
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      }
      else console.log('Email Sent Successfully');
    });
}

module.exports = trackProduct;