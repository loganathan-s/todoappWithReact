import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../components/App';
import Task from '../components/Task';
import EditTaskForm from '../components/EditTaskForm';


describe(Task, () => { 
	// Added to allow lifecycles, bydefault Enzyme wont execute lifecylce methods
	 const options = {
   	  	 lifecycleExperimental: true,
  		 disableLifecycleMethods: false 
	   };

	  const removeTask = jest.fn();	
	  const markComplete = jest.fn();
	  const setCurrentTaskEditable = jest.fn();
	  const updateTask = jest.fn();
	  const index = "task1";
	  const task =  {
        task: 'Everyones favorite white task. We will cut it to the size you need and ship it.',
        status: 'in_progress'
    };
    
	const appComponent = shallow(<App/>, options);
	const currentTaskKey = Object.keys(appComponent.state('tasks'))[0];
	let currentTask = appComponent.state('tasks')[Object.keys(appComponent.state('tasks'))[0]];
	const component = mount(<Task key={currentTaskKey} index={currentTaskKey} task={currentTask } removefromTask={removeTask} markasDone={markComplete}  setCurrentTaskEditable={setCurrentTaskEditable} updateTask={updateTask}/>);

	it('renders and matches the snapshot', () => {
    	const component = renderer.create(<Task key={index} index={index} task={ task } removefromTask={removeTask} markasDone={markComplete}  setCurrentTaskEditable={setCurrentTaskEditable} updateTask={updateTask}/>);
    	const tree = component.toJSON();
    	expect(tree).toMatchSnapshot();
    });


  	it('should not contain an EditTaskForm subcomponent', () => {
    	expect(component.find(EditTaskForm)).toHaveLength(0);
  	});

  	it('should contain Edit, MarkComplet and Remove Task Buttons', () => {
      expect(component.find('button')).toHaveLength(3);
  	});

  	it('should set the edit flag when I click edit button', () => {
  	    component.find('button.editTask').simulate('click');
        expect(setCurrentTaskEditable).toBeCalled();
        expect(currentTask.edit).toBe(undefined);
        appComponent.instance().setCurrentTaskEditable(index);
  	    expect(currentTask.edit).toBe(true);
  	});

    it('should set the task done flag when I click markComplete button', () => {
        expect(currentTask.status).toBe("in_progress");
        component.find('button.markcomplete').simulate('click');
        expect(markComplete).toBeCalled();
        appComponent.instance().markComplete(index);
        expect(currentTask.status).toBe("Done");
    });

    it('should set the task status to InProgress flag when I click markInProgress button', () => {
        component.find('button.markcomplete').simulate('click');
        expect(markComplete).toBeCalled();
        appComponent.instance().markComplete(index);
        expect(currentTask.status).toBe("InProgress");
    });

    it('should remove the task when removeTask button', () => {
        const totalTasks = Object.keys(appComponent.state('tasks')).length;
        component.find('button.removeTask').simulate('click');
        expect(removeTask).toBeCalled();
        appComponent.instance().removeTask(index);
        expect(Object.keys(appComponent.state('tasks')).length).toEqual(totalTasks - 1);
    });

    it('should display the Editform, when task has edit flag', () => {
        currentTask["edit"] = true;
        const component = mount(<Task key={currentTaskKey} index={currentTaskKey} task={currentTask } removefromTask={removeTask} markasDone={markComplete}  setCurrentTaskEditable={setCurrentTaskEditable} updateTask={updateTask}/>);
        expect(currentTask.edit).toBe(true);
        expect(component.find(EditTaskForm)).toHaveLength(1);
    });

});