import React from 'react';
import ReactDom from 'react-dom';
import Footer from '../Footer';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Footer></Footer>, div);
});

it("renders app name corectly", () => {
    const {getByTestId} = render(<Footer appName="The best"></Footer>);
    expect(getByTestId('footer')).toHaveTextContent("The best");
});