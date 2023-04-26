export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  scheme: {
    name: "Scheme",
    description : "Color Mode Switcher" ,
    defaultValue: "both",
    toolbar: {
      icon:"mirror",
      items: ['light', 'dark', 'both'],
      dynamicTitle:true
    },
  }
}