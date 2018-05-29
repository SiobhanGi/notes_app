var assert = {
  isTrue: function(assertionToCheck, testDescription) {
    if(!assertionToCheck) {
      throw new Error(`%cTest failed: ${testDescription}: ${assertionToCheck} is not truthy` , `color:red`);
    } else {
      console.log(`%cTest passed: ${testDescription}: ${assertionToCheck}` , `color:green` );
    }
  },

  isFalse: function(assertionToCheck, testDescription) {
    if(!assertionToCheck) {
      throw new Error(`%cTest failed: ${testDescription}: ${assertionToCheck} is not falsy` , `color:red`);
    } else {
      console.log(`%cTest passed: ${testDescription}: ${assertionToCheck}` , `color:green`);
    }
  },

  isEqual: function(arg1, arg2, testDescription) {
    if( arg1 !== arg2 ) {
      throw new Error(`%cTest failed: ${arg1}: does not equal ${arg2}`);
    } else {
      console.log(`%cTest passed: ${testDescription}: ${arg1} is equal to ${arg2}`, `color:green`);
    }
  }
};
