import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Candidates} from './../imports/api/candidates.js';
import {Tracker} from 'meteor/tracker';

const renderCandidates = (candidateList) => {
return candidateList.map((candidate) => {
  return (
    <p key={candidate._id}>
    {candidate.name} has {candidate.votes} vote(s){' '}
    <button onClick={() => (
      alert("Are you sure you want to delete that candidate?"),

      Candidates.remove({_id: candidate._id})
    )}>X</button>
    </p>);
  });
};

Meteor.startup(() => {
  const proccessFormDataFunction = (event) => {
    event.preventDefault();
    let candidateName = event.target.formInputNameAttribute.value;

    if(candidateName){
      Candidates.insert({
          name: candidateName,
          votes: 1,
        });
    };
    event.target.formInputNameAttribute.value = '';
  };


//Candidates.insert({
    //name: 'joe',
    //votes: 3,
  //});
  Tracker.autorun(() => {
  //const candidates = Candidates.find().fetch();
  let title = "The big election";
  let jsx = (
    <div>
      <h1>{title}</h1>
      <form onSubmit={proccessFormDataFunction}>
        <input type="text" name="formInputNameAttribute" placeholder="candidate name" />
        <button> Add candidate</button>
      </form>
      {renderCandidates(Candidates.find().fetch())}
    </div>
);
  ReactDom.render(jsx, document.getElementById('content'));
  });
});
