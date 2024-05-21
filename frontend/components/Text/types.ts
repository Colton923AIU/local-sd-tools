import { UIComponent, FontSize, FontWeight } from "../types";

interface Text extends UIComponent {
  fz?: keyof FontSize;
  fw?: FontWeight;
}

export default Text;
