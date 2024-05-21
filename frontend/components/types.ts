type Justify = "center" | "start" | "end" | "between" | "around" | "evenly";
type Align = "center" | "start" | "end" | "stretch";
type Wrap = "wrap" | "wrap-reverse";

interface ColorChoices {
  black: {
    0: "rgba(0,0,0,1)";
    1: "rgba(0,0,0,0.9)";
    2: "rgba(0,0,0,0.8)";
    3: "rgba(0,0,0,0.7)";
    4: "rgba(0,0,0,0.6)";
    5: "rgba(0,0,0,0.5)";
    6: "rgba(0,0,0,0.4)";
    7: "rgba(0,0,0,0.3)";
    8: "rgba(0,0,0,0.2)";
    9: "rgba(0,0,0,0.1)";
  };
  white: {
    0: "rgba(255,255,255,1)";
    1: "rgba(255,255,255,0.9)";
    2: "rgba(255,255,255,0.8)";
    3: "rgba(255,255,255,0.7)";
    4: "rgba(255,255,255,0.6)";
    5: "rgba(255,255,255,0.5)";
    6: "rgba(255,255,255,0.4)";
    7: "rgba(255,255,255,0.3)";
    8: "rgba(255,255,255,0.2)";
    9: "rgba(255,255,255,0.1)";
  };
  grey: {
    0: "rgba(128,128,128,1)";
    1: "rgba(128,128,128,0.9)";
    2: "rgba(128,128,128,0.8)";
    3: "rgba(128,128,128,0.7)";
    4: "rgba(128,128,128,0.6)";
    5: "rgba(128,128,128,0.5)";
    6: "rgba(128,128,128,0.4)";
    7: "rgba(128,128,128,0.3)";
    8: "rgba(128,128,128,0.2)";
    9: "rgba(128,128,128,0.1)";
  };
  aiuBlue: {
    0: "rgba(0,101,164,1)";
    1: "rgba(0,101,164,0.9)";
    2: "rgba(0,101,164,0.8)";
    3: "rgba(0,101,164,0.7)";
    4: "rgba(0,101,164,0.6)";
    5: "rgba(0,101,164,0.5)";
    6: "rgba(0,101,164,0.4)";
    7: "rgba(0,101,164,0.3)";
    8: "rgba(0,101,164,0.2)";
    9: "rgba(0,101,164,0.1)";
  };
  aiuOrange: {
    0: "rgba(217,61,0,1)";
    1: "rgba(217,61,0,0.9)";
    2: "rgba(217,61,0,0.8)";
    3: "rgba(217,61,0,0.7)";
    4: "rgba(217,61,0,0.6)";
    5: "rgba(217,61,0,0.5)";
    6: "rgba(217,61,0,0.4)";
    7: "rgba(217,61,0,0.3)";
    8: "rgba(217,61,0,0.2)";
    9: "rgba(217,61,0,0.1)";
  };
  aiuLightBlue: {
    0: "rgba(0,166,206,1)";
    1: "rgba(0,166,206,0.9)";
    2: "rgba(0,166,206,0.8)";
    3: "rgba(0,166,206,0.7)";
    4: "rgba(0,166,206,0.6)";
    5: "rgba(0,166,206,0.5)";
    6: "rgba(0,166,206,0.4)";
    7: "rgba(0,166,206,0.3)";
    8: "rgba(0,166,206,0.2)";
    9: "rgba(0,166,206,0.1)";
  };
  aiuGrey: {
    0: "rgba(137,140,142,1)";
    1: "rgba(137,140,142,0.9)";
    2: "rgba(137,140,142,0.8)";
    3: "rgba(137,140,142,0.7)";
    4: "rgba(137,140,142,0.6)";
    5: "rgba(137,140,142,0.5)";
    6: "rgba(137,140,142,0.4)";
    7: "rgba(137,140,142,0.3)";
    8: "rgba(137,140,142,0.2)";
    9: "rgba(137,140,142,0.1)";
  };
  aiuDarkBlue: {
    0: "rgba(15,64,107,1)";
    1: "rgba(15,64,107,0.9)";
    2: "rgba(15,64,107,0.8)";
    3: "rgba(15,64,107,0.7)";
    4: "rgba(15,64,107,0.6)";
    5: "rgba(15,64,107,0.5)";
    6: "rgba(15,64,107,0.4)";
    7: "rgba(15,64,107,0.3)";
    8: "rgba(15,64,107,0.2)";
    9: "rgba(15,64,107,0.1)";
  };
}

interface FontSize {
  none: "0px";
  xxxs: ".5rem";
  xxs: ".7rem";
  xs: ".9rem";
  sm: "1rem";
  md: "1.2rem";
  lg: "1.5rem";
  xl: "1.8rem";
  xxl: "2.4rem";
  xxxl: "3.2rem";
  max: "5rem";
}

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

interface Spacing {
  none: "0px";
  xxxs: "1px";
  xxs: ".1rem";
  xs: ".2rem";
  sm: ".3rem";
  md: ".5rem";
  lg: ".8rem";
  xl: "1rem";
  xxl: "1.3rem";
  xxxl: "1.5rem";
  max: "2rem";
}

interface UIComponent {
  h?: string;
  w?: string;
  bg?: ColorChoices[keyof ColorChoices][keyof ColorChoices[keyof ColorChoices]];
  p?: Spacing[keyof Spacing];
  m?: Spacing[keyof Spacing];
}

export {
  FontSize,
  FontWeight,
  UIComponent,
  Spacing,
  ColorChoices,
  Justify,
  Align,
  Wrap,
};
