import {render,cleanup,screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import { Movie } from './movie';

afterEach(cleanup);
test('should render homepage component', () => {

    render(<BrowserRouter > <Movie /> </BrowserRouter>);
    const movie = screen.getByTestId('movie');
    expect(movie).toBeInTheDocument();
    expect(movie).toHaveTextContent("Movies Details");
});