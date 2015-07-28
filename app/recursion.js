
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
    	         if (typeof file === 'string') 
    	         { 
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
     	/*Heap's algorithm 
		First we set a counter i  to 0. 
    	Now we perform the following steps repeatedly, until i  is bigger than N. 
    	We use the algorithm to generate the (N − 1)! permutations of the first N − 1 elements, 
    	adjoining the last element to each of these. 
    	This generates all of the permutations that end with the last element. 
    	Then if N is odd, we switch the first element and the last one, 
    	while if N is even we can switch the i th element and the last one 
    	(there is no difference between N even and odd in the first iteration). 
        We add one to the counter i and repeat. 
        In each iteration, the algorithm will produce all of the permutations that end with the element 
        that has just been moved to the "last" position. 
*/
       	var permuatationArr = [];       	
    	var recursivefun = function (numarr,len) 
    	{
    		if(len == 1)
    		{
    			permuatationArr.push(numarr.slice());
    		}
    		else
    		{
    			for(var i=0; i<len; i++)
    			{
    				recursivefun(numarr,len-1);
    				if(len%2 === 0)
    					swapfun(numarr,i,len-1);
    				else
    					swapfun(numarr,0,len-1);
    			}
    		}	
    	}
    	recursivefun(arr, arr.length);
    	
    	function swapfun(temparr,idx,len)
    	{
    		var temp = temparr[idx];
    		temparr[idx] = temparr[len];
    		temparr[len] = temp;
    	}
    	
    	return permuatationArr;
    }
  };
});
