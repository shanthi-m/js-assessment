if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
    		 // Shifting the 1 for N-1 bits
    		 var constant = 1 << (bit-1);
    		 // if the bit is set, return 1
    		 if(num & constant)
    			 return 1;
     		 else
    			 return 0;
    },

    base10: function(str) {
    	return parseInt(str,2);
    },

    convertToBinary: function(num) {
      var binum = "";
      var length = 8;
      while(length--)
        binum += (num >> length ) & 1;    
      return binum;  
    },

    multiply: function(a, b) {
        var num = a * b;
    	return (parseFloat(num.toPrecision(4)));
    }
  };
});

