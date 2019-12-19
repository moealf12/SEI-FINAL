const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
const Post = require('/Users/mohammedalfisal/desktop/mypro/model/Post.js')
AdminBro.registerAdapter(require('admin-bro-mongoose'))

const adminBro = new AdminBro({
  databse:[],
  resources: [Post],
  rootPath: '/admin',
})

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro)
