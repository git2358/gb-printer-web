import { createTheme, lighten } from '@mui/material';
import { blend } from '@mui/system';
import type { Components, PaletteMode, Theme } from '@mui/material';
import { textFieldSlotDefaults } from '../../consts/textFieldSlotDefaults';
import { muiButton } from '../components/button';
import { toggleButtonGroup } from '../components/toggleButtonGroup';
import { outlinedInput } from '../components/outlinedInput';
import { paper } from '../components/paper';
import { tab } from '../components/tab';
import { inputLabel } from '../components/inputLabel';
import { formControl } from '../components/formControl';
import { cardContent } from '../components/cardContent';
import { appBar } from '../components/appBar';
import { toolbar } from '../components/toolbar';
import { link } from '../components/link';
import { dialogTitle } from '../components/dialogTitle';
import { tabs } from '../components/tabs';
import { select } from '../components/select';
import { list } from '../components/list';
import { menuItem } from '../components/menuItem';
import { cardActionArea } from '../components/cardActionArea';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    bg: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    bg?: PaletteOptions['primary'];
  }
}


const themeComponents = (theme: Theme): Components<Theme> => ({
  MuiButton: {
    styleOverrides: muiButton(theme),
  },
  MuiToggleButtonGroup: {
    styleOverrides: toggleButtonGroup(theme),
    defaultProps: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      color: 'tertiary',
    },
  },
  MuiOutlinedInput: {
    styleOverrides: outlinedInput(theme),
  },
  MuiPaper: {
    styleOverrides: paper(),
  },
  MuiTab: {
    styleOverrides: tab(theme),
  },
  MuiTabs: {
    styleOverrides: tabs(theme),
    defaultProps: {
      scrollButtons: 'auto',
      indicatorColor: 'secondary',
      variant: 'scrollable',
    },
  },
  MuiInputLabel: {
    styleOverrides: inputLabel(),
  },
  MuiFormControl: {
    styleOverrides: formControl(),
  },
  MuiCardContent: {
    styleOverrides: cardContent(),
  },
  MuiAppBar: {
    styleOverrides: appBar(theme),
  },
  MuiToolbar: {
    styleOverrides: toolbar(theme),
  },
  MuiLink: {
    styleOverrides: link(),
  },
  MuiDialogTitle: {
    styleOverrides: dialogTitle(theme),
  },
  MuiSwitch: {
    defaultProps: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      color: 'tertiary',
    },
  },
  MuiTextField: {
    defaultProps: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      color: 'tertiary',
      slotProps: textFieldSlotDefaults,
    },
  },
  MuiSelect: {
    styleOverrides: select(),
    defaultProps: {
      displayEmpty: true,
    },
  },
  MuiList: {
    styleOverrides: list(),
  },
  MuiMenuItem: {
    styleOverrides: menuItem(theme),
  },
  MuiCardActionArea: {
    styleOverrides: cardActionArea(),
  },
});

interface GenerateThemeArgs {
  mode: PaletteMode,
  colorPrimary: string,
  colorSecondary: string,
  colorTertiary: string,
  colorSuccess: string,
  colorWarn: string,
  colorError: string,
  colorPageBackground: string,
  colorText: string,
}

export const generateTheme = ({
  mode,
  colorPrimary,
  colorSecondary,
  colorTertiary,
  colorSuccess,
  colorWarn,
  colorError,
  colorPageBackground,
  colorText,
}: GenerateThemeArgs): Theme => {
  const theme: Theme = createTheme({
    shape: {
      borderRadius: 0,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 570, // GalleryHeader and EditRGBN switch orientation, max-width of Navigation-Drawer and ImageGroups-TreeView, Buttons on Palette Page change direction
        md: 768, // Main-Container-padding changes, All Dialogs go fullscreen
        lg: 1024, // Dialog max-width
        xl: 1264, // Layout max-width
      },
    },
    typography: {
      fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
      body1: {
        fontSize: 16,
      },
      body2: {
        fontSize: 13,
      },
      h1: {
        fontSize: 30,
        fontWeight: 'bold',
      },
      h2: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      h3: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      h4: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
    palette: {
      mode,
      primary: {
        main: colorPrimary,
      },
      secondary: {
        main: colorSecondary,
      },
      success: {
        main: colorSuccess,
      },
      warning: {
        main: colorWarn,
      },
      error: {
        main: colorError,
      },
      background: {
        default: colorPageBackground,
        paper: lighten(colorPageBackground, mode === 'light' ? 0.6 : 0.02),
        // default: '#ff0000',
        // paper: '#00ff00',
      },
    },
  });

  const withPalette = createTheme(theme, {
    palette: {
      tertiary: theme.palette.augmentColor({
        color: {
          main: colorTertiary,
        },
        name: 'tertiary',
      }),
      fgtext: theme.palette.augmentColor({
        color: {
          main: colorText,
        },
        name: 'fgtext',
      }),
      bg: theme.palette.augmentColor({
        color: {
          main: colorPageBackground,
        },
        name: 'bg',
      }),
      text: {
        primary: colorText,
        secondary: colorText,
      },
    },
  });

  const colorHeadline = blend(withPalette.palette.primary.main, colorText, 0.7);

  return createTheme(withPalette, {
    typography: {
      fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
      body1: {
        color: colorText,
      },
      body2: {
        color: colorText,
      },
      h1: {
        color: colorHeadline,
      },
      h2: {
        color: colorHeadline,
      },
      h3: {
        color: colorHeadline,
      },
      h4: {
        color: colorHeadline,
      },
    },
    components: themeComponents(withPalette),
  });
};
