import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";

const StyledParagraph = styled.p`
  &.booked {
    color: #3a7c16;
  }
  &.not-booked {
    color: #ad2b2b;
  }
`;

const CourtBooked = ({ clubName, courtBooked }) => {
  const intl = useIntl();

  if (clubName) {
    const classNames = ["sub-text"];
    if (courtBooked) {
      classNames.push("booked");
    } else {
      classNames.push("not-booked");
    }
    return (
      <StyledParagraph className={classNames.join(" ")}>
        ({courtBooked ?
          intl.formatMessage({ id: "courtBooked" })
          :
          intl.formatMessage({ id: "courtNotBooked" })})
      </StyledParagraph>
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