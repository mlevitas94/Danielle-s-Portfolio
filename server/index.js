require('dotenv').config()
const express = require('express')
const nodemailer = require("nodemailer");
const massive = require('massive');
const public = require('./publicendpoints/public')
const admin = require('./adminEndpoints/admin')
const session = require('express-session')
const s3 = require('./adminEndpoints/s3')

const {SERVER_PORT, DB_URL, user, pass, SESSION_SECRET} = process.env
const path = require('path')
const app = express();

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))

app.use(express.json());
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
    next()
})
app.use( express.static( `${__dirname}/../build` ) );


//public endpoints
app.get('/getprojects', public.getProjects)


//admin endpoints
app.post('/createadmin/', admin.checkAdmin, admin.createAdmin)
app.post('/login/', admin.login)
app.get('/getadmin/', admin.getAdmin)
app.post('/newproject', admin.newProject)


//s3
app.get('/api/signs3', s3.generateUrl)


app.post('/email', async (req,res) => {
    const {name, email, message} = req.body
    if(!name || !email || !message){
      return res.status(500).send('Please fill out all fields')
    }
    try{
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: user, // generated ethereal user
              pass: pass // generated ethereal password
            }
          });
        
          // send mail with defined transport object
           await transporter.sendMail({
            from: `Nodemailer`, // sender address
            to: 'danielleelmers@gmail.com', // list of receivers
            subject: 'Message from portfolio', // Subject line
            html: `<p>from ${name}</p> <p>${email}</p> <p>${message}</p>` // html body
          });
          res.status(200).send('email sent')
    }catch(err){
        console.log(err)
        res.status(500).send('could not send email')
    }
    
  })






app.get('*', (req, res)=>{  res.sendFile(path.join(__dirname, '../build/index.html'));})

massive(DB_URL).then(db => {
    console.log('db connected')
    app.set('db', db);
    app.listen(SERVER_PORT, () => console.log(`Now arriving at ${SERVER_PORT}`));
  })