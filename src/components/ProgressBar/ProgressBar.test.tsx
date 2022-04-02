import { render, screen } from '../../utils/test-utils';
import React from 'react';
import ProgressBar from './ProgressBar'

describe('ProgressBar', () => {
  
  it('sets width properly', () => {
    render(<ProgressBar width={10} testId='progress-bar' size='large' progressString='test' />)
    const bar = screen.queryByTestId('progress-bar-bar');
    expect(bar).toHaveStyle('width: 10%')
  });
  it('sets string and classes properly', () => {
    render(<ProgressBar className='testt' color="green" testId='progress-bar' size='large' progressString='test' />)
    const bar = screen.queryByTestId('progress-bar-bar');
    const wrapper = screen.queryByTestId('progress-bar');
    const string = screen.queryByTestId('progress-bar-string');
    expect(wrapper).toHaveClass('testt')
    expect(string).toHaveTextContent('test')
    expect(bar).toHaveStyle('width: 0%')
  });

})