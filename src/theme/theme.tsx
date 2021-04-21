import "styled-components";

// and extend it
declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      size: {
        s: string;
        m: string;
        l: string;
        xl: string;
      };
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
    size: {
      s: "12px",
      m: "16px",
      l: "24px",
      xl: "36px",
    },
    fontFamily: {
      primary: `"Montserrat", sans-serif`,
      secondary: ``,
      tertiary: ``,
    },
  },
  color: {
    primary: "#FF8303",
    secondary: "#03C4FF",
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

export const darkTheme = {
  font: {
    weight: { light: "300", regular: "400", semibold: "600", bold: "700" },
    size: {
      s: "12px",
      m: "16px",
      l: "24px",
      xl: "36px",
    },
    fontFamily: {
      primary: `"Montserrat", sans-serif`,
      secondary: ``,
      tertiary: ``,
    },
  },
  color: {
    primary: "#FF8303",
    secondary: "#03C4FF",
    tertiary: "#989898",
    background: "#1B1A17",
    backgroundsecondary: "#fff",
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
