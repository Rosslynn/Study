import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import List from './List'

describe('List.tsx', () => {
  test('Should render the information of the user if it is provided', async () => {
    const userInformation = {
      nombre: 'Jano',
      apellido: 'Eyquem',
      edad: 34,
    }

    render(<List {...userInformation} />);
    const userInformationNode = screen.getByTestId('user-information')

    expect(userInformationNode).toHaveTextContent(userInformation.nombre);
    expect(screen.getByText(userInformation.apellido)).toBeInTheDocument();

    // expect(List).toHaveTextContent('Jano');
  });

  test('should not paint empty elements', async () => {
    const userInformation = {
      nombre: 'Jano',
      apellido: '',
      edad: 34,
    }

    render(<List {...userInformation} />);

    expect(screen.getByTestId('user-lastname')).toBeNull();
  });
})