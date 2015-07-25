if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
    	return str.match(".*[0-9].*");
    },

    containsRepeatingLetter : function(str) {
        return str.match("(\w)\1*");
    },

    endsWithVowel : function(str) {

    },

    captureThreeNumbers : function(str) {

    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
