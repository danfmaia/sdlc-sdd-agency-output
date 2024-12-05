import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoApp from '../TodoApp';

// Test suite for Add Task feature

describe('Add Task Feature', () => {
  test('renders input and add button', () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    expect(getByPlaceholderText('Add a new task')).toBeInTheDocument();
    expect(getByText('Add')).toBeInTheDocument();
  });

  test('adds a new task to the list', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<TodoApp />);
    const input = getByPlaceholderText('Add a new task');
    const addButton = getByText('Add');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(getByTestId('task-list')).toHaveTextContent('New Task');
  });
});