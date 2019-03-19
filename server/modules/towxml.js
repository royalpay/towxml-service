var Towxml = require('towxml');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var towxml = new Towxml();

module.exports = {
    html2wxml : function(val){
        return towxml.toJson(val,'html');
    },
    markdown2wxml:function(val){
        return towxml.toJson(val,'markdown');
    }
};