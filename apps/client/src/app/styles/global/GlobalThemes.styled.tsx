import { ReactionType } from '@types';

export type GlobalThemes = Record<string, ITheme>;

export interface ITheme {
  color: {
    primary: string;
    secondary: string;
    'link-highlight': string;
    'button-highlight': string;
    active: string;
    reactions: Record<ReactionType, string>;
  };
  fonts: { main: string };
  background: {
    navbar: string;
    footer: string;
    body: string;
    reactions: Record<ReactionType, string>;
  };
  lines: { light: string };
}

export const globalThemes: GlobalThemes = {
  lightMode: {
    color: {
      primary: `hsl(0, 0%, 19%)`,
      secondary: '#676767',
      ['button-highlight']: `#e3e3e3`,
      ['link-highlight']: `#4475fa`,
      active: `rgba(0, 0, 147, 0.66)`,
      reactions: {
        [ReactionType.like]: '#c2dfe5',
        [ReactionType.celebrate]: '#d04895',
        [ReactionType.funny]: '#c080bd',
        [ReactionType.love]: '#c0889e',
        [ReactionType.sad]: '#96b3d9',
      },
    },
    background: {
      body: '#F3F2EF',
      navbar: '#ffffff',
      footer: '#003333',
      reactions: {
        [ReactionType.like]: '#1c66c7',
        [ReactionType.celebrate]: '#b490a9',
        [ReactionType.funny]: '#fecb00',
        [ReactionType.love]: '#b698ad',
        [ReactionType.sad]: '#112a48',
      },
    },
    lines: {
      light: '#dadada',
    },
    fonts: {
      main: 'Roboto, sans-serif',
    },
  },
};

/*

interface IPalette {
  main: string;
  contrastText: string;
}

interface IFonts {
  main:string
  logo:string
}
export interface DefaultTheme {
  fonts:IFonts
  borderRadius: string;
  palette: {
    common: {
      black: string
      white: string
      beige: string
    }
    primary: IPalette
    secondary: IPalette
  };
  borders:{
    light:string
  }
}

export const defaultTheme: DefaultTheme = {
  palette: {
    common: {
      black: 'hsl(0, 0%, 19%)',
      white: '#ffffff',
      beige: '#F3F2EF'
    },
    primary: {
      main: '#5E5E5E',
      contrastText: '#191919'
    },
    secondary: {
      main: '#E8E7E4',
      contrastText: '#ffffff'
    },
  },
  borders:{
    light: '#dadada',
  },
  fonts: {
    main: 'Roboto, sans-serif',
    logo: 'Bangers'
  },
  borderRadius: '1rem',
};
*/
