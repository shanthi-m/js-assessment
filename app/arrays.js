if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
    	return arr.indexOf(item);
    },

    sum : function(arr) {
    	var total = 0;
	    $.each(arr,function() {
	        total += this;
	    });
       return total;
    },

    remove : function(arr, item) { 
    	var ret = [];
    	$.each(arr,function(idx,val)
    	{
    	  if (val !== item) {
    	    ret.push(val);
    	  }
    	});
    	return ret;
    },

    removeWithoutCopy : function(arr, item) {
       return arr;
    },

    append : function(arr, item) {
       var count = arr.push(item);
       return arr;
    },

    truncate : function(arr) {
       arr.pop();
       return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
          arr.splice(index,0,item);
          return arr;
    },

    count : function(arr, item) {
    	var count = 0;
    	$.each(arr, function(index, val) {
            if(val === item)
            {
              count++;	
            }
    	});
    	return count;
    },

    duplicates : function(arr) {
    	var sortedArr = arr.sort();   
    	var duplicateArr = [];  
    	for(i=0; i < arr.length-2; i++)
    	{  
    		if (sortedArr[i+1] == sortedArr[i]) 
    		{  
    	      if(duplicateArr.indexOf(sortedArr[i]) == -1)
    	        duplicateArr.push(sortedArr[i]);  
    	    } 
   		}
        return duplicateArr;
    },

    square : function(arr) {
    	for(i=0; i<arr.length; i++)
    	{
    	  arr[i] = Math.pow(arr[i],2);
    	}
    	return arr;
    },

    findAllOccurrences : function(arr, target) {
    	var idxArray = [];
    	var count=0;
    	$.each(arr, function (index, value) {
    	     if(value.indexOf(target)!= -1) 
    	     {
    	    	 idxArray[count] = index;
    	    	 count++;
    	     }
    	});
       return idxArray;
    }
  };
});
