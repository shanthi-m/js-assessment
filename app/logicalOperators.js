if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {
          if(a || b)
        	return true;
          else if()
        	  return false;   
          else if()
    },

    and : function(a, b) {
        if(!a && !b)
      	  return false;
        else if(a && b)
      	  return true;
        else if(a < b)
      	  return true;
        else
        	return false;
    }
  };
});
