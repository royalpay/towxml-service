const towxml = require('./modules/towxml.js'),
 bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = {
    attachTo:function(app){
        app.get('/',function(req,res){
           res.json({
                "description": "Welcome to use towxml service.",
                "links":[{
                    "rel":"html2wxml",
                    "href":"/html2wxml"
                },{
                    "rel":"markdown2wxml",
                    "href":"/markdown2wxml"
                 }]

           });
        });

        app.post('/html2wxml',urlencodedParser,function(req,res){
            let content = towxml.html2wxml(req.body.content,'html');
            res.json(content);
        });

        app.post('/markdown2wxml',urlencodedParser,function(req,res){
            let content = towxml.markdown2wxml(req.body.content,'html');
            res.json(content);
        });
    }
}