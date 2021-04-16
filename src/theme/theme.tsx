import "styled-components";

// and extend it
declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      weight: {
        light: string;
        regular: string;
        semibold: string;
        bold: string;
      };
      fontFamily: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
    };
    color: {
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
      backgroundsecondary: string;
    };
    screenSize: {
      tablet: string;
      desktop: {
        small: string;
        default: string;
        big: string;
      };
    };
  }
}

export const theme = {
  font: {
    weight: { light: "300", regular: "400", semibold: "600", bold: "700" },
    fontFamily: {
      primary: `"Montserrat", sans-serif`,
      secondary: ``,
      tertiary: ``,
    },
  },
  color: {
    primary: "#FF8303",
    secondary: "#F0E3CA",
    tertiary: "#989898",
    background: "#fff",
    backgroundsecondary: "#1B1A17",
  },
  screenSize: {
    tablet: "768px",
    desktop: {
      small: "1025px",
      default: "1366px",
      big: "1440px",
    },
  },
};
