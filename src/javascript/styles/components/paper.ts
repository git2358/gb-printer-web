import type { Theme } from '@mui/system';
import type { ComponentsOverrides } from '@mui/material/styles/overrides';

export const paper = (): ComponentsOverrides<Theme>['MuiPaper'] => ({
  root: {
    backgroundImage: 'none',
  },
});
