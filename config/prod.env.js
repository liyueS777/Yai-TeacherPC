'use strict'
console.log('环境pro:',process.env.NODE_ENV_VARIES)
let MY_NODE_ENV = null
if(process.env.NODE_ENV_VARIES === 'production_dev'){
  MY_NODE_ENV = '"dev"'
}else if(process.env.NODE_ENV_VARIES === 'production_test'){
  MY_NODE_ENV = '"test"'  
}else if(process.env.NODE_ENV_VARIES === 'production_pro'){
  MY_NODE_ENV = '"production"'  
}
module.exports = {
  NODE_ENV: '"production"',
  MY_NODE_ENV:MY_NODE_ENV
}
