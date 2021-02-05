import * as React from "react";
import PropTypes from "prop-types";
import Form, { FormRow } from "../../modules/common/components/form";
import FormControl from "../../modules/common/components/form/FormControl";
import { MatchShape } from "./matchesSlice";
import { useIntl } from "gatsby-plugin-intl";
import styled from "styled-components";

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

const FormWrapper = styled.div`
  padding-bottom: 100px;
  .form-label {
    margin-top: 15px;
  }
  .privacy-policy {
    &.invalid-feedback {
      display: inline-block;
    }
  }
  .form-data-email {
    margin: 0 0 25px 15px;
  }
  .form-check-label {
    a {
      text-decoration: underline;
    }
  }
  .google-places-container {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const MatchForm = ({ match }) => {
  const intl = useIntl();

  function renderForm(formState, input) {
    return (
      <FormWrapper>
        <FormRow>
          <FormControl label={"Club name"} name={'clubName'}
            {...input.text({
              name: 'clubName'
            })} />
        </FormRow>
        <FormRow>
          <FormControl label={"Date"} name={'matchDate'}
            {...input.text({
              name: 'matchDate'
            })} />
        </FormRow>
        <FormRow>
          <FormControl label={"Time"} name={'matchTime'}
            {...input.text({
              name: 'matchTime'
            })} />
        </FormRow>
        <FormRow>
          <FormControl label={"Player 1"} name={'player1'}
            {...input.text({
              name: 'player1'
            })} />
        </FormRow>
      </FormWrapper>
    );
  }

  return (
    <Form
      formData={match}
      renderForm={renderForm}
      isFormValid={null}
      errors={[]}
      onSubmit={() => null/*(e, values) => saveProfile({ ...values })*/} />
  );
};

MatchForm.propTypes = {
  match: PropTypes.shape(MatchShape)
}

export default MatchForm;
