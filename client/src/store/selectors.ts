import { selector } from 'recoil';

import { exampleState } from './atoms';

export const exampleSelector = selector({
  key: 'exampleSelector',
  get: ({ get }) => {
    const state = get(exampleState);
    return state.toUpperCase();
  },
});
