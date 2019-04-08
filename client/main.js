import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Candidates} from './../imports/api/candidates.js';
import {Tracker} from 'meteor/tracker';

const renderCandidates = function(candidateList){
return candidateList.map(function(candidate){
  return <p key={candidate._id}> {candidate.name} has {candidate.votes} vote(s)</p>;
  });
};

Meteor.startup(function(){
  Candidates.insert({
    name: 'joe',
    votes: 3,
  });
  Tracker.autorun(function(){
  //const candidates = Candidates.find().fetch();
  let title = "The big election";
  let jsx = (
    <div>
      <h1>{title}</h1>
      {renderCandidates(Candidates.find().fetch())}
    </div>
);
  ReactDom.render(jsx, document.getElementById('content'));
  });
});
