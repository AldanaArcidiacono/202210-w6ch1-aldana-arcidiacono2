import { createAction } from '@reduxjs/toolkit';
import { Characters } from '../models/data';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<Array<Characters>>(
    actionTypes.load
);
export const addActionCreator = createAction<Characters>(actionTypes.add);
export const updateActionCreator = createAction<Characters>(actionTypes.update);
export const deleteActionCreator = createAction<Characters>(actionTypes.delete);
