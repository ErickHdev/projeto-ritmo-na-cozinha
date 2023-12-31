import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import { mockFetch } from './mock';

describe('Footer Component', () => {
  beforeEach(() => {
    mockFetch();
  });
  it('Deve navegar para /drinks quando o botão drinks for clicado', () => {
    render(
      <MemoryRouter initialEntries={ ['/meals'] }>
        <App />
      </MemoryRouter>,
    );

    const drinksButton = screen.getByTestId('drinks-bottom-btn');
    fireEvent.click(drinksButton);
    const drinks = screen.getByText(/Drinks/i);
    expect(drinks).toBeInTheDocument();
  });

  it('Deve navegar para /meals quando o botão meals for clicado', () => {
    render(
      <MemoryRouter initialEntries={ ['/drinks'] }>
        <App />
      </MemoryRouter>,
    );

    const mealsButton = screen.getByTestId('meals-bottom-btn');
    fireEvent.click(mealsButton);

    const meals = screen.getByText(/Meals/i);
    expect(meals).toBeInTheDocument();
  });
});
