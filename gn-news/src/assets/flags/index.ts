import { Country } from "config/Country";

import it from "./it.svg";
import jp from "./jp.svg";
import pl from "./pl.svg";
import us from "./us.svg";
import ca from "./ca.svg";
import tw from "./tw.svg";
import ro from "./ro.svg";

type Flags = {
  [key in Country]: string;
}

const flags: Flags = {
  it, jp, pl, us, ro, tw, ca
}

export default flags;
export type { Flags }