import { render, screen } from '@testing-library/react';
import { Form } from '../form/form';
import { CardList } from './card.list';

describe('Given the CardList component', () => {
    describe('When it renders', () => {
        beforeEach(() => {
            render(
                <>
                    <Form></Form>
                    <CardList></CardList>
                </>
            );
        });
        test('Then it should display the character name', () => {
            const element = screen.getByText(/Joffrey/i);
            expect(element).toBeInTheDocument();
        });
    });
});
