import { describe,test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import  App  from './App'

describe('App.tsx', () => {
  test('when increment button is clicked the counter should increase', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<App />);
    const incrementBtn = screen.getByRole('button', { name: /count is/i });

    // Act
    await user.click(incrementBtn);

    // Assert
    expect(incrementBtn).toHaveTextContent(/count is 1/i);
  });
})