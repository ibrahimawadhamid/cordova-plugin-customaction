
var cordova = require('cordova');

var PLUGIN_NAME = 'CustomAction';

var CustomAction = {
  perform: function(firstParameter, success, error) {
    var params = [firstParameter];
    cordova.exec(success, error, PLUGIN_NAME, 'perform', params);
  }
};

module.exports = CustomAction;
