if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
       return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
    	var ownprop = [];
    	  for (var prop in obj) {
    	    // hasOwnProperty returns true if the property
    	    // belongs to the object, not its prototype chain.
    	    if (obj.hasOwnProperty(prop)) {
    	    	ownprop.push(prop + ': ' + obj[prop]);
    	    }
    	  }
    	  return ownprop;
    }
  };
});
