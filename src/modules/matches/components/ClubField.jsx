import * as React from "react";
import { useIntl } from "gatsby-plugin-intl";
import styled from "styled-components";
// TODO: Move to common components
import TextField from "@material-ui/core/TextField";
import { Row, Col } from "../../common/components/Layout";
import PropTypes from "prop-types";
import Checkbox from "../../common/components/Checkbox/Checkbox";

const StyledRow = styled(Row)`
  &.MuiGrid-container:first-child {
    margin-bottom: 0px;
  }
`;

const ClubField = ({ clubValue, onChange }) => {
  const intl = useIntl();

  let changedClubValue = {...clubValue};
  function handleChange(id, value) {
    changedClubValue = {
      ...clubValue,
      [id]: value
    };
    onChange({...changedClubValue});
  }

  const [courtBooked, setCourtBooked] = React.useState(clubValue.courtBooked);
  function handleCourtBookedChange(value) {
    handleChange("courtBooked", value);
    setCourtBooked(value);
  }

  return (
    <>
      <StyledRow>
        <Col>
          <TextField
            id="clubName"
            label={intl.formatMessage({ id: "clubName" })}
            onChange={(e) => handleChange("clubName", e.target.value)}
            defaultValue={clubValue.clubName}
            variant="outlined" />
        </Col>
      </StyledRow>
      <StyledRow>
        <Col>
          <Checkbox
            label={intl.formatMessage({ id: "courtBooked" })}
            onChange={(value) => handleCourtBookedChange(value)}
            checked={courtBooked} />
        </Col>
      </StyledRow>
    </>
  );
};

ClubField.propTypes = {
  id: PropTypes.string.isRequired,
  clubValue: PropTypes.object.isRequired,
  onChange: PropTypes.func
};

export default ClubField;
