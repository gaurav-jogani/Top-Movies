import {render,cleanup,screen} from '@testing-library/react';
import { Homepage } from './homepage';
import {BrowserRouter} from 'react-router-dom';

afterEach(cleanup);
test('should render homepage component', () => {
    render(<BrowserRouter > <Homepage /> </BrowserRouter>);
    const homePage = screen.getByTestId('homepage');
    expect(homePage).toBeInTheDocument();
});