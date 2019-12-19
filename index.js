const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const AdminBroMongoose = require('admin-bro-mongoose')
var path = require('path');
const Home = require('./roots/Home')
const app = express();
app.use(cors())
// import route
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/',Home);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const Post = require('./model/Post');


// pro //
const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
AdminBro.registerAdapter(AdminBroMongoose)
const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
})

const PORT = process.env.PORT || 5000

const router = AdminBroExpress.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router)

mongoose.connect('mongodb+srv://moe:Aa7788000@moe-pxfnp.gcp.mongodb.net/test?retryWrites=true&w=majority'
,{ useUnifiedTopology: true },
()=>{
  console.log('Server is up')
})






app.listen(PORT,()=>console.log(`app is up on PORT ${PORT}`));
