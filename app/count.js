if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
    	var cnt = start;
    	var limit = end;
    	
        var myid = setInterval(
    			function()
    			{
        		  console.log(cnt);
    			  if(cnt < limit)
        			 cnt++;
    			  else
    				 clearInterval(myid); 
        		}, 100);
        
        return {
        	cancel:function()
        	{
        		clearInterval(myid); 
        	}
        };
     }
  };
});