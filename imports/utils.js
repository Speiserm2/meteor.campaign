console.log('log from imports/utils.js');


export let sayHello = function(){
  return 'hello! from imports/utils.js';
};

export let name = 'michael whitney';

//export default 'this is a default val from imports/utils.js';

// can't do the following
//export default let someDefault = 'this is a default val from imports/utils.js';

// must break it up like the following
let someDefault = 'this is a default val from imports/utils.js';
export default someDefault;
