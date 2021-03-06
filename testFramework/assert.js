var assert = {
  isTrue: function(assertionToCheck, testDescription) {
    if(!assertionToCheck) {
      throw new Error(`Test failed: ${testDescription}: ${assertionToCheck} is not truthy`);
    } else {
      console.log(`%cTest passed: ${testDescription}: ${assertionToCheck}` , `color:green` );
    }
  },

  isFalse: function(assertionToCheck, testDescription) {
    if(!assertionToCheck) {
      throw new Error(`Test failed: ${testDescription}: ${assertionToCheck} is not falsy`);
    } else {
      console.log(`%cTest passed: ${testDescription}: ${assertionToCheck}` , `color:green`);
    }
  },

  isEqual: function(arg1, arg2) {
    if( arg1 !== arg2 ) {
      throw new Error(`Test failed: ${arg1}: does not equal ${arg2}`);
    } else {
      console.log(`%cTest passed: ${arg1} is equal to ${arg2}`, `color:green`);
    }
  },

  isEqualToArray: function( arg1, arg2, testDescription) {
    arr1 = arg1.length;
    arr2 = arg2.length;
    if (arr1 != arr2) {
      throw new Error (`Test failed: ${arg1}: does not equal ${arg2}`);
    } else {
      while (arr1 -- ) {
      if (arg1[arr1] !== arg2[arr1]) {
       throw new Error (`Test failed: ${arg1}: does not equal ${arg2}`);

    } else {
    console.log(`%cTest passed: ${testDescription}: ${arg1} is equal to ${arg2}`, `color:green`);
    }}
  }}
};
