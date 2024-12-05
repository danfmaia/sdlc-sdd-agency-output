import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoApp from '../TodoApp';

// Test suite for Remove Task feature

describe('Remove Task Feature', () => {
  test('removes a task from the list', () => {
    const { getByPlaceholderText, getByText, getByTestId, queryByText } = render(<TodoApp />);
    const input = getByPlaceholderText('Add a new task');
    const addButton = getByText('Add');

    // Add a task
    fireEvent.change(input, { target: { value: 'Task to be removed' } });
    fireEvent.click(addButton);

    // Ensure the task is added
    expect(getByTestId('task-list')).toHaveTextContent('Task to be removed');

    // Remove the task
    const removeButton = getByText('Remove');
    fireEvent.click(removeButton);

    // Ensure the task is removed
    expect(queryByText('Task to be removed')).not.toBeInTheDocument();
  });
});