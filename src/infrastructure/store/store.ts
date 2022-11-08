import { configureStore } from '@reduxjs/toolkit';
import { characterReducer } from '../../features/reduces/reducer';

export const appStore = configureStore({
    reducer: { character: characterReducer },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
