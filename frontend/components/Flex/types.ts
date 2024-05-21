import { Align, Justify, Wrap, UIComponent } from "../types";

interface Flex extends UIComponent {
  direction: "row" | "column";
  justify: Justify;
  align: Align;
  wrap: Wrap;
}

export default Flex;
