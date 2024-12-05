import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoApp from '../TodoApp';

// Test suite for View Tasks feature

describe('View Tasks Feature', () => {
  test('displays tasks in the list', () => {
    const { getByTestId } = render(<TodoApp />);
    const taskList = getByTestId('task-list');

    // Initially, the task list should be empty
    expect(taskList.children.length).toBe(0);

    // Add tasks to the list
    const tasks = ['Task 1', 'Task 2', 'Task 3'];
    tasks.forEach(task => {
      const input = getByTestId('task-input');
      const addButton = getByTestId('add-button');

      fireEvent.change(input, { target: { value: task } });
      fireEvent.click(addButton);
    });

    // Check if tasks are displayed
    tasks.forEach(task => {
      expect(taskList).toHaveTextContent(task);
    });
  });
});