import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';


test('render app component', () => {
    // render the component
    const {} = render(<Episodes episodes={[]} />);
});