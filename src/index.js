const express = require('express');

const { ServerConfig, Logger } = require('./config');

const mailsender = require('./config/email-config');

const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`server started on PORT : ${ServerConfig.PORT}`);
    try {
       const response=await mailsender.sendMail({
        from: ServerConfig.GMAIL_EMAIL,
        to: 'raunakscarlet6@gmail.com',
        subject: 'is it working?',
        text: 'yes, it is working.'
    });
    console.log(response);
    
   } catch (error) {
    console.log(error);
   }
})


