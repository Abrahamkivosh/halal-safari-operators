import { Icon } from "@chakra-ui/react";
import React from "react";

const RatingCard = (num: number) => {
  return Array(5)
    .fill("")
    .map((_, i) => (
      <Icon key={i} color={i < num ? "brand.600" : "gray.300"} name="star">
        *
      </Icon>
    ));
};

export default RatingCard;
