import * as React from "react";
import PropTypes from "prop-types";
import { useIntl } from "gatsby-plugin-intl";

const CourtBooked = ({ clubName, courtBooked }) => {
  const intl = useIntl();

  if (clubName) {
    return (
      <p className="sub-text">
        ({courtBooked ?
          intl.formatMessage({ id: "courtBooked" })
          :
          intl.formatMessage({ id: "courtNotBooked" })})
      </p>
    );
  } else {
    return null;
  }
}

CourtBooked.propTypes = {
  clubName: PropTypes.srting,
  courtBooked: PropTypes.bool
};

export default CourtBooked;