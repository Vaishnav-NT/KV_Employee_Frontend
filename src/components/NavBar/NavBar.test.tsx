import NavBar from './NavBar';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test if the NavBar component works properly', () => {
  test('To match snapshot', () => {
    const element = render(<NavBar />);
    expect(element).toMatchSnapshot();
  });
});
