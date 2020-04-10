/*
  This file is used to store unsecure, application-specific data common to all
  environments.
*/

module.exports = {
  port: process.env.PORT || 5001,
  logPass: 'test',
  AUTHSERVER: process.env.AUTHSERVER ? process.env.AUTHSERVER : 'https://auth.fullstack.cash',
  APISERVER: process.env.APISERVER ? process.env.APISERVER : 'https://api.fullstack.cash/v3/',
  BCHJSTOKEN: process.env.BCHJSTOKEN ? process.env.BCHJSTOKEN : '',
  stateFileName: 'state.json',
  FULLSTACKLOGIN: process.env.FULLSTACKLOGIN ? process.env.FULLSTACKLOGIN : 'demo@demo.com',
  FULLSTACKPASS: process.env.FULLSTACKPASS ? process.env.FULLSTACKPASS : 'demo',
  apiLevel: 10 // Tier of access: 10 = free, 20 = full node, 30 = indexer, 40 = SLP
}
