'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')


console.log('环境dev:',process.env.NODE_ENV_VARIES)
let MY_NODE_ENV = null
if(process.env.NODE_ENV_VARIES === 'production_dev'){
  MY_NODE_ENV = '"dev"'
}else if(process.env.NODE_ENV_VARIES === 'production_test'){
  MY_NODE_ENV = '"test"'  
}else if(process.env.NODE_ENV_VARIES === 'production_pro'){
  MY_NODE_ENV = '"production"'  
}
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MY_NODE_ENV:MY_NODE_ENV  
})
