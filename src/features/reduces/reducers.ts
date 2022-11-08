import { createReducer } from '@reduxjs/toolkit';
import { Characters } from '../models/data';
import * as ac from './action.creator';

const initialState: Array<Characters> = [];

export const characterReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (_state, action) => action.payload);

    builder.addCase(ac.addActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);

    builder.addCase(ac.updateActionCreator, (state, action) =>
        state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        )
    );

    builder.addCase(ac.deleteActionCreator, (state, action) =>
        state.filter((item) => item.id !== action.payload.id)
    );

    builder.addDefaultCase((state) => state);
});
