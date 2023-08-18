// import SubHeader from './SubHeader';
// import { SubHeaderPropsType } from './SubHeader';
// import { fireEvent, render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';

// describe('Test if the SubHeader component works properly', () => {
//   test('To match snapshot', () => {
//     const subheaderProps: SubHeaderPropsType = {
//       headerText: 'header',
//       actionButtonText: 'action'
//     };

//     const element = render(<SubHeader {...subheaderProps} />);
//     expect(element).toMatchSnapshot();
//   });

//   test('If header text rendered correctly', () => {
//     const subheaderProps: SubHeaderPropsType = {
//       headerText: 'header',
//       actionButtonText: 'action'
//     };

//     render(<SubHeader {...subheaderProps} />);
//     const element = screen.getByTestId('subheader-test');
//     if (element) expect(element).ekem('Button');
//   });

//   test('If type applied correctly', () => {
//     const subheaderProps: SubHeaderPropsType = {
//       type: 'primary',
//       label: 'Button'
//     };

//     render(<SubHeader {...subheaderProps} />);
//     const element = screen.getByTestId('button-test');
//     if (element) expect(element).toHaveClass('primary');
//   });

//   test('If onclick gets triggered correctly', () => {
//     const onClick = jest.fn();
//     const subheaderProps: SubHeaderPropsType = {
//       type: 'primary',
//       label: 'Button',
//       onClick
//     };

//     render(<SubHeader {...subheaderProps} />);
//     const element = screen.getByTestId('button-test');
//     fireEvent.click(element);
//     expect(onClick).toBeCalled();
//   });
// });
