//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://service_account:zuESOoUvbMd58Q95@cen3031-5q2i1.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '362ae4ed936c445a8da3e1df8e75e56a' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};