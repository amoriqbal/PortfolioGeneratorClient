const {createProxyMiddleware}=require('http-proxy-middleware');
const { env } = require('process');
if(process.env.NODE_ENV!=='production'){
module.exports=function(app){
    app.use(createProxyMiddleware(['/api','/auth/google'],{target:'http://localhost:5000'}));
}
}
