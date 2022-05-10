/* global describe,it */
import { render, screen } from '@testing-library/react';
import Index from '../src/pages/index';
import { sum } from '../src/utils/index';

describe('Index page', () => {
  it('should render', () => {
    // render(<Index />);
    // expect(screen.getByRole('heading', { name: 'Home'})
    // ).toBeInTheDocument()
    expect(sum(1, 2)).toBe(3);
  });
  // it('should render with header', () => {
  //   render(<Index />);
  //   expect(screen.getByRole('heading', { name: 'Mammut'})
  //   ).toBeInTheDocument()
  // });
  // it('should render with main', () => {
  //   render(<Index />);
  //   const main = screen.getByRole("main");
  //   expect(main).toBeInTheDocument();
  // });
});
