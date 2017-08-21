import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../components/App';
import TaskForm from '../components/TaskForm';

describe(TaskForm, () => {
  
  const addTask = jest.fn();
  const createTask = jest.fn();
  const component = mount(<TaskForm addTask={addTask} onSubmit={createTask}/>);
  const appComponent = shallow(<App/>);

  it('renders and matches the snapshot', () => {
    	const component = renderer.create(<TaskForm addTask={addTask} />);
    	const tree = component.toJSON();
    	expect(tree).toMatchSnapshot();
  });

  it('should display the form', () => {
  	expect(component.find(".taskForm")).toHaveLength(1);
  });

  it('should create new task', () => {
    const totalTasks = Object.keys(appComponent.state('tasks')).length;
  	expect(component.find(".taskForm")).toHaveLength(1);
    const taskInput = component.find('input');
    taskInput.value = "New Task";
    expect(taskInput.value).toBe('New Task')
    component.find("form.taskForm").simulate('submit', { preventDefault(){} });
    expect(addTask).toBeCalled();
    appComponent.instance().addTask({task: "New Task", status: "New"})
    expect(Object.keys(appComponent.state('tasks')).length).toEqual(totalTasks + 1);
  });

});