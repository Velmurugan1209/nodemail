
import { createTransport, getTestMessageUrl } from 'nodemailer';
import en from 'dotenv';
const app = en.config();
const transport = await createTransport({
     service : 'gmail' ,   
    // post : 
    // secure :   
    auth : {
        user : process.env.EMAIL_USER ,
        pass : process.env.EMAIL_PASS
    } 
});

transport.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });



const send = transport.sendMail({
    from : 'velupvm1209@gmail.com',
    to : 'dhonibalabala@gmail.com',
    subject: 'Nova Strid',
    text : 'is this okey',
    attachments : [
        {
            filename: 'package.json',
            path : './package.json'
        }
    ]
} , (err,info) => {
    if (err){
        console.log(err);
    }
    else{
        console.log(info);
    }
}
)
const url = getTestMessageUrl(send);
console.log('url :',send);


transport.close();


module.exports = sendMail ;


