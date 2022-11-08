import * as ac from './action.creator';
import { characterReducer } from './reducer';

const mockChar = {
    id: 5,
    role: 'King',
    name: 'Cersei',
    family: 'Lannister',
    age: 37,
    lifeStatus: true,
    message: 'You are all gonna die',
    image: '',
    series: 'GoT',
};

const mockChar2 = {
    id: 8,
    role: 'Fighter',
    name: 'Arya',
    family: 'Stark',
    age: 14,
    lifeStatus: true,
    message: 'First I punch and then I ask',
    image: '',
    series: 'GoT',
};

describe('Given a state and an action', () => {
    describe('When ActionTypes is load', () => {
        test('Then it should return payload as a new state', () => {
            const newState = characterReducer(
                [],
                ac.loadActionCreator([mockChar])
            );
            expect(newState).toEqual([mockChar]);
        });
    });

    describe('When the action is not load', () => {
        test('Then it should return a new instance of state', () => {
            const newState = characterReducer([mockChar], {
                type: '',
                payload: [],
            });
            expect(newState).toEqual([mockChar]);
        });
    });

    describe('When the action is add', () => {
        test('Then it should return a new instance of the state plus a payload', () => {
            const newState = characterReducer(
                [],
                ac.addActionCreator(mockChar)
            );
            expect(newState).toEqual([mockChar]);
        });
    });

    describe('When the action is update', () => {
        test('then return an updated instance of the state', () => {
            const newState = characterReducer(
                [mockChar],
                ac.updateActionCreator(mockChar)
            );
            expect(newState).toEqual([mockChar]);
        });
        test('then if is not in the initialState then return the same instance', () => {
            const newState = characterReducer(
                [mockChar],
                ac.updateActionCreator(mockChar2)
            );
            expect(newState).toEqual([mockChar]);
        });
    });

    describe('When the action is delete', () => {
        test('Then it should return an instance of the state without the payload', () => {
            const newState = characterReducer(
                [mockChar, mockChar2],
                ac.deleteActionCreator(mockChar)
            );
            expect(newState).toEqual([mockChar2]);
        });
    });
});
