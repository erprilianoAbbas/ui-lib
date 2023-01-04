import React from 'react';
import Text from './Text';

import { render } from '@testing-library/react';

describe('Text', () => {
    it('should render', () => {
        const { container } = render(<Text />);
        expect(container).toMatchSnapshot();
    });
});