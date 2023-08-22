export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  journeyConfigBase: {
    name: 'Config',
    description: 'Journey Config',
    defaultValue: 'default',
    toolbar: {
      icon: 'eye',
      items: [
        { value: 'default', title: 'Default Journey Configuration' },
        { value: 'ourCrowd', title: 'Our Crowd Journey Configuration'},
        { value: 'TAC', title: 'TAC Journey Configuration'},
        { value: 'NSW', title: 'NSW Journey Configuration'},
      ],
    },
  },
};
