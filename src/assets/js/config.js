if(process.env.MY_NODE_ENV === 'dev'){
    console.log('开发啦')
}
else if(process.env.MY_NODE_ENV === 'test'){
    console.log('测试啦')
}
else if(process.env.MY_NODE_ENV === 'production'){
    console.log('生产啦')
}
