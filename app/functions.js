if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
    	return fn.apply(fn, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
    	function e(msg) {
           return str + ", " + msg;
        }
        return e;
    },

    makeClosures : function(arr, fn) 
    {
    	var closureArr = []; 	 	 
    	var myfun = function(val) { 
    		return function() { return fn(val); }; 
    	}; 
	
	   for (var i = 0; i < arr.length; i++) { 
		   closureArr.push(myfun(arr[i])); 
	    } 
    	
    	return closureArr;   	
    },

    partial : function(fn, str1, str2) {
    	var slice = Array.prototype.slice;    // A reference to the Array#slice method.
    	var args = slice.call(arguments, 1);  //getting array
    	return function() {
    		// Invoke the originally-specified function, passing in all originally-
    		return fn.apply(this, args.concat(slice.call(arguments, 0)));
    	}; 
    },

    useArguments : function() {
    		var sum = 0;
    		for (var i = 0; i < arguments.length; i++)
    		{
    			sum += arguments[i];
    		}
    		return sum;
    },

    callIt : function(fn) {
    	var args = Array.prototype.slice.call(arguments, 1, arguments.length); 
    	fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
    	var args = Array.prototype.slice.call(arguments, 1, arguments.length); 
    	   return function() { 
    	       var moreArgs = args.concat(Array.prototype.slice.call(arguments)); 
    	       return fn.apply(null, moreArgs); 
    	   }; 
    },

    curryIt : function(fn) {
    }
  };
});
