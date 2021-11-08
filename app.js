const express=require('express');
const path=require('path');
const app=express();
const port=8000;

// Express Specific Stuff
app.use('/static',express.static('static'))
// Pug Specific Stuff
app.set('view engine','pug') // set the template engine as pug
app.set('views',path.join(__dirname,'views')) // Set the views directory
// End Points
app.get('/',(req,res)=>{
      const parms={}
      res.status(200).render('home.pug',parms);
})
app.get('/contact',(req,res)=>{
      const parms={}
      res.status(200).render('contact.pug',parms);
})
// Start The Server
app.listen(port,()=>{
    console.log(`The application strated successfully on port ${port}`);
})