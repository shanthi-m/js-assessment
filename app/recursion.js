
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {    	
    	var dirFiles = [];

    	var recursivefiles = function (fdata) 
    	{
    		for(var i = 0; i < fdata.length; i++)
	        {
	           if(typeof fdata[i] === 'object') 
        		   recursivefiles(fdata[i].files);  
               else
           		   dirFiles.push(fdata[i]);
 	        }
    	 }
    	 recursivefiles(data.files);    	
    	
    	return dirFiles;
    },

    permute: function(arr) {
    	var permuatationArr = [];
    	
    	var recursivefun = function (arrtemp, len) 
    	{
	        for (var i = 0; i < len; i++)
	        {
	             var temp = arrtemp.slice();
	             temp.splice(len-1-i, 0, temp.splice(len-1, 1)[0]);
	             if (len >= arr.length) 
	             {
	            	 permuatationArr.push(temp);
	             } 
	             else 
	             { 
	            	 recursivefun(temp, len + 1); 
	             }
	        }
    	 }
    	recursivefun(arr, 1);
    	 
    	 return permuatationArr;
    }
  };
});
