import { FC } from "react";

import { chakra } from "@chakra-ui/react";

import flags from "assets/flags";
import { Country } from "config/countries";

type Props = {
  country: Country;
};

const Flag: FC<Props> = ({ country }) => {
  return (
    <chakra.div width="16px" height="12px">
      <img src={flags[country]} width="16px" height="12px" alt={country} />
    </chakra.div>
  );
};

export default Flag;
