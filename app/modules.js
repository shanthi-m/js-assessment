if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
    	var mymodule = (function() {
    		return {
    			greeting: str1,
    			name: str2,
    			sayIt: function () {
    				return mymodule.greeting + ", " + mymodule.name;
    		    }
    		  };
    	})();
    	
    	return mymodule;
    }
  };
});

