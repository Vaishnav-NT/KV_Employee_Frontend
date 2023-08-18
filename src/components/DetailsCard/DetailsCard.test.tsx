import DetailsCard from './DetailsCard';
import { DetailsCardProsType } from './DetailsCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test if the DetailsCard component works properly', () => {
  test('To match snapshot', () => {
    const detailsCardProps: DetailsCardProsType = {
      label: 'label',
      content: 'content'
    };

    const element = render(<DetailsCard {...detailsCardProps} />);
    expect(element).toMatchSnapshot();
  });

  test('If label rendered correctly', () => {
    const detailsCardProps: DetailsCardProsType = {
      label: 'label',
      content: 'content'
    };

    render(<DetailsCard {...detailsCardProps} />);
    const element = screen.getByTestId('detailsCard-label-test');
    if (element) expect(element).toHaveTextContent('label');
  });

  test('If content gets rendered correctly', () => {
    const detailsCardProps: DetailsCardProsType = {
      label: 'label',
      content: 'content'
    };

    render(<DetailsCard {...detailsCardProps} />);
    const element = screen.getByTestId('detailsCard-content-test');
    if (element) expect(element).toHaveTextContent('content');
  });
});
