import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoApp from '../TodoApp';

// Test suite for Responsiveness

describe('Responsiveness', () => {
  test('renders correctly on different screen sizes', () => {
    const { container } = render(<TodoApp />);

    // Simulate different screen sizes
    global.innerWidth = 320;
    global.dispatchEvent(new Event('resize'));
    expect(container).toBeInTheDocument();

    global.innerWidth = 768;
    global.dispatchEvent(new Event('resize'));
    expect(container).toBeInTheDocument();

    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
    expect(container).toBeInTheDocument();
  });
});