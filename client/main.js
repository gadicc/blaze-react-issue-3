import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import React from 'react';
import { render } from 'react-dom';
import Blaze from 'meteor/gadicc:blaze-react-component';

// import './main.html';

const data = new ReactiveVar([]);

Template.test.helpers({
  data: () => data.get()
});

const App = () => (
  <div>
    <Blaze template="test" />
  </div>
);

Meteor.startup(() => {
  const reactRoot = document.createElement('div');
  reactRoot.id = 'react-root';
  document.body.appendChild(reactRoot);

  render(<App />, reactRoot);

  setTimeout(() => {
    data.set(['a', 'b', 'c']);
  }, 1000);
});