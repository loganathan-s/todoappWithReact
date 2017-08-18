import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../components/App';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import Task from '../components/Task';
import Footer from '../components/Footer';

describe(App, () => {
	// Added to allow lifecycles, bydefault Enzyme wont execute lifecylce methods
	const options = {
  		lifecycleExperimental: true,
  		disableLifecycleMethods: false 
	};

  const component = shallow(<App />, options);

  it('renders and matches our snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains an Header subcomponent', () => {
    expect(component.find(Header)).toHaveLength(1);
  });

  it('contains an TaskForm subcomponent', () => {
    expect(component.find(TaskForm)).toHaveLength(1);
  });

  it('contains an Task subcomponent', () => {
    expect(component.find(Task)).toHaveLength(9);
  });

  it('contains an Footer subcomponent', () => {
    expect(component.find(Footer)).toHaveLength(1);
  });

  it('contains the same number of Task components as tasks', () => {
  	const tasks = component.find(Task).length;
  	const s_tasks   = Object.keys(component.state('tasks')).length;
  	expect(tasks).toEqual(s_tasks);
  });

});
