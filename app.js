require('dotenv').config()
const express=require("express");
const app=express();
const path = require("path");
const bodyparser=require("body-parser");
const cors=require("cors")
app.use(bodyparser.json());
app.use(cors())
const PORT=process.env.PORT ||8001
app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
       
        user: "panthatipreethan@gmail.com",
        pass: "cecvbluzmqrcebkj"
    }
});

app.post('/api/sendDetails',async (req, res) => {
    const { email,name,message } = req.body;
    const mailOptions = {
        from: "panthatipreethan@gmail.com",
        to: "panthatipreethan14@gmail.com",
        subject: 'Intrested in joining with you ',
        html: `<h4>Name:${name} </h4><br/><h4>Email:${email} </h4><br/><h4>Message:${message} </h4>`,
    };

    await transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.post('/api/sendResume',async (req, res) => {
    const { email } = req.body;
    const mailOptions = {
        from: 'panthatipreethan@gmail.com',
        to: email,
        subject: 'Preethan Resume',
        attachments:[
            {
                filename:'preethan_resume.pdf',
                path:'./resume/preethan_resume.pdf'
            }
        ]
       
    };

    await transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(PORT,(err)=>{
    console.log(`running on port ${PORT}`);
})
