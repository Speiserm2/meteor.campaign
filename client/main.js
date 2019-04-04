import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';

const renderCandidates = function(candidateList){

let newList = candidateList.map(function(candidate){
  return <p key={candidate._id}> {candidate.name} has {candidate.votes} vote(s)</p>;
  });
  return newList;
};

Meteor.startup(function(){
  const candidates = [{
    _id: '01',
    name: 'pat',
    votes: 5,
  },
  {
    _id: '02',
    name: 'chris',
    votes: 7,
  },
  {
    _id: '03',
    name: 'sydney',
    votes: 17,
  },
  {
    _id: '04',
    name: 'mike',
    votes: 69,
  }

  ];
  let name = 'newman';
  let jsx = (
    <div>
      <h1>Campaign for {name}</h1>
      <p>Content</p>
      {renderCandidates(candidates)}
    </div>
);
  ReactDom.render(jsx, document.getElementById('content'));
});
