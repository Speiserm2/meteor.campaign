import {Meteor} from 'meteor/meteor';

import {Candidates} from './../imports/api/candidates.js';

Meteor.startup(function(){
  Candidates.insert({
name: 'pat',
votes: 5,

  });
  
});
