interface LightMode {
  color: { 'main-black': string };
  background: { navbar: string; footer: string; body: string };
  lines: { light: string };
  fonts: {main: string};
}

export const lightMode: LightMode = {
  color:{
    'main-black': 'hsl(0, 0%, 19%)'
  },
  background: {
    body: '#F3F2EF',
    navbar: '#ffffff',
    footer: '#003333'
  },
  lines: {
    "light":'#dadada'
  },
  fonts: {
    main: 'Roboto, sans-serif'
  }
};
