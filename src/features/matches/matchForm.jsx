import * as React from "react";
import PropTypes from "prop-types";
import { MatchShape, Match } from "./matchesSlice";
import { useIntl } from "gatsby-plugin-intl";
// import WhatsappShareLink from "../modules/common/components/WhatsappShareLink";
// import Button from "../../modules/common/components/Button";

// const clubName = "Partido+en+Montgat+Padel";
// const clubUrl = "https%3A%2F%2Fgoo.gl%2Fmaps%2FjCHX9hiu8FBHMAjH8";
// const matchDate = "Martes+02%2F02";
// const matchTime = "19%3A00h+a+20%3A30h";
// const p1 = "Marc";
// const p2 = "Dani";
// const p3 = "Tomas";
// const p4 = "%3F";
// let template = `${clubName}%0D%0A%0D%0A${clubUrl}%0D%0A%0D%0A%F0%9F%93%85${matchDate}%0D%0A%F0%9F%95%92${matchTime}`;
// template += `%0D%0A%0D%0A%F0%9F%8E%BE+${p1}%0D%0A%F0%9F%8E%BE+${p2}%0D%0A%F0%9F%8E%BE+${p3}+%0D%0A%F0%9F%8E%BE+${p4}`;

const MatchForm = ({ match = { ...Match } }) => {
  const intl = useIntl();

  console.log(match);

  return (
    <div>
      <p>Club name</p>
    </div>
  );
};

MatchForm.propTypes = {
  match: PropTypes.shape(MatchShape)
}

export default MatchForm;
