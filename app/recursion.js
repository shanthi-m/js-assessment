
if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {    	
    	   var listOfFiles = []; 
    	   var dirs = []; 
    	 
    	   function processDir(dir)
    	   { 
    	       var i, len, file; 
    	       var files = dir.files; 	    	
    	       dirs.push( dir.dir );    	 
    	 
    	       for (i = 0, len = files.length; i < len; i++) 
    	       { 
    	         file = files[i]; 
    	         if (typeof file === 'string') { 
    	           if (!dirName || dirs.indexOf(dirName) > -1) { 
    	             listOfFiles.push(files[i]); 
    	             } 
    	           } 
    	          else { 
    	              processDir(files[i]); 
    	          } 
    	       }    	 
           dirs.pop(); 
         }
    	 processDir(data); 
     
        return listOfFiles; 

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
