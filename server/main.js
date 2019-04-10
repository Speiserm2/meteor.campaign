import {Meteor} from 'meteor/meteor';

import {Candidates} from './../imports/api/candidates.js';

Meteor.startup(function(){
  /*
  let square = function(x) {

    return x*x;
  };
  console.log(square(5));

  function square2(x) {
    return x*x;
  };
  console.log(square2(3));

  let square3 = (x) => {
    return x*x;
  };
  console.log(square3(6));

  let square4 = (x) => x*x;
  console.log(square4(4));


  let user = {
    name: 'newman',
    sayHi: function(){
      console.log(this.name);
    },
  };
  user.sayHi();

  let user2 = {
    name: 'freeman',
    sayHi: () => {
      console.log(user2.name);
    },
  };
  user2.sayHi();
*/

let numbers=[3, 12, 54, 17];
let newNumbers= numbers.map(function(number){
  return number+1;
});

console.log(newNumbers);

let newNumbers2= numbers.map((number) => number+1);

console.log(newNumbers2);

});
