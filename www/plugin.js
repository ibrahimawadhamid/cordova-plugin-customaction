cordova.define("cordova-plugin-customaction.CustomAction", function(require, exports, module) {
  var cordova = require('cordova');
  
  var PLUGIN_NAME = 'CustomAction';
  
  function CustomAction() {
      
    this.perform = function (firstParameter, success, error) {
      return new Promise(function (resolve, reject) {
  
        var params = [firstParameter];
  
        cordova.exec(success || resolve, error || reject, PLUGIN_NAME, 'perform', params);
      });
    };
  
  };
  
  module.exports = new CustomAction();
  
  
  });