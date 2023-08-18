import Header from './Header';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test if the Header component works properly', () => {
  test('To match snapshot', () => {
    const element = render(<Header />);
    expect(element).toMatchSnapshot();
  });
});
