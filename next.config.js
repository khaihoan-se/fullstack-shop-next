/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    "BASE_URL": "http://localhost:3000",
    "MONGO_URI": "mongodb+srv://shopnext-khaihoan:6Tkz6uMhLRrzBqpv@social-network.toyof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  }
}
// 6Tkz6uMhLRrzBqpv