import { render, screen } from '../../utils/test-utils';
import React from 'react';
import Button from './Button'

describe('Button', () => {
  it('renders with disabled class when button is disabled', () => {
    render(<Button text='test button' data-testid="button" disabled />)
    const button = screen.queryByTestId('button');
    expect(button).toHaveClass('button__disabled')
  });
  it('renders with correct color class', () => {
    render(<Button text='test button' data-testid="button" color="red" />)
    const button = screen.queryByTestId('button');
    expect(button).toHaveClass('button--red')
  });
  it('renders with correct classes', () => {
    render(<Button className='test' text='test button' data-testid="button" color="red" />)
    const button = screen.queryByTestId('button');
    expect(button).toHaveClass('button--red test')
  });
  it('renders loader when button is loading', () => {
    render(<Button text='test button' data-testid="button" color="red" loading />)
    const loader = screen.queryByTestId('button-loader');
    expect(loader).toBeInTheDocument()
  });
})