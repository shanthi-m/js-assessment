if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
    	var timeout; 
    	function countnum() 
    	{ 
    	   console.log(start++); 
    	   if (start <= end) { 
    	       timeout = setTimeout(countnum, 100); 
    	    } 
    	}
    	countnum(); 
    	 
	     return { 
	       cancel : function () { 
	          clearTimeout(timeout); 
	       } 
	     }; 
     }
  };
});