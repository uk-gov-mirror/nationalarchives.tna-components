import React from 'react';
import GuidanceFeedback from './guidance-feedback.react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('test', () => {
  expect(true).toBe(true);
});
// // Snapshot 1
test('Show the relevant form elements when click on button NO or YES', () => {
  const component = renderer.create(
    <GuidanceFeedback />
  );

  let submitEvent = { 
        preventDefault: () => {} 
  };

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  tree.children[2].props.onClick(submitEvent);

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[3].props.onClick(submitEvent);

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

// Snapshot 2
test('Hide the form and button elements on submit', () => {
  const component = renderer.create(
    <GuidanceFeedback />
  );

  let submitEvent = { 
    preventDefault: () => {} 
  };

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[4].children[1].props.onClick(submitEvent);

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

// Unit testing using Enzyme
test('Check for the absence of the Guidance Feedback component', () => {
  const component = shallow(
    <GuidanceFeedback />
  );
  expect(component.exists()).toBeTruthy();
});

// Unit testing
test('Test buildGTMObj & pushInDatLayer methods', () => {
  const component = mount(
    <GuidanceFeedback />
  );

  const obj = {};

  component.instance().buildGTMObj(obj);

  expect(typeof component.instance().buildGTMObj(obj) === 'object').toBeTruthy();

  expect(component.instance().buildGTMObj(obj)).toHaveProperty('event');
  expect(component.instance().buildGTMObj(obj)).toHaveProperty('eventAction');
  expect(component.instance().buildGTMObj(obj)).toHaveProperty('eventCategory');
  expect(component.instance().buildGTMObj(obj)).toHaveProperty('eventLabel');

  component.instance().pushInDataLayer(obj);

  expect(typeof component.instance().pushInDataLayer(obj) === 'object').toBeTruthy();

});