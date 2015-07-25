if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
    	if(str.match(/\d/))
    	  return true;
    	
    	return false;
    },

    containsRepeatingLetter : function(str) {
        if(str.match(/([a-zA-Z]).*?\1/))
        	return true;
        return false;
    },

    endsWithVowel : function(str) {
        var vowelArr = ['a','e','i','o','u'];
        var ele = str.substring(str.length-1, str.length);

        if(vowelArr.indexOf(ele.toLowerCase()) != -1)
        	return true;
        
        return false;
    },

    captureThreeNumbers : function(str) {

    },

    matchesPattern : function(str) {
       var pattern = /^(\d{3}\-){2}\d{4}$/;
       if(str.match(pattern))
    	   return true;

       return false;       
     },
    
    isUSD : function(str) {

    }
  };
});
