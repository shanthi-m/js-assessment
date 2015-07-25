if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {    	
    	var jsdata = $.parseJSON(data);
    	var filesdata = jsdata.files;
    	var dirFiles = [];
    	var cnt = 0;

    	var files = function readFiles(filesdata) {    		
   	    	$.each(filesdata, function(index, fileRec)
   	    	{
               if($.isArray(fileRec))
            	{
            	   readFiles(fileRec.files);
            	}
               else
               {
            	     dirFiles[cnt] = fileRec;
            	     cnt++;
               }
   	    	});    	    
    	}

    	return dirFiles;
    },

    permute: function(arr) {

    }
  };
});
