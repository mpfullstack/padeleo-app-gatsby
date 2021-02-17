import * as React from "react";
import styled from "styled-components";
import Snackbar from "./Snackbar";
import Button from "./Button";
import { useIntl, Link } from "gatsby-plugin-intl"
import { Storage } from "../../../helpers";

const Message = styled.p`
  margin: 3px 0;
  a {
    color: ${props => props.theme.palette.primary.main};
  }
`;

const CookiesAlert = () => {
  const intl = useIntl();

  const [show, showCookiesAlert] = React.useState(false);

  React.useEffect(() => {
    if (!Storage.get("accept-cookies-policy")) {
      showCookiesAlert(true);
    }
  }, []);

  const message = <Message>
    {intl.formatMessage({ id: "cookiesAlertMessage"})}
    <br />
    <Link to="/legal_advice#cookies-policy">{intl.formatMessage({ id: "viewCookiesPolicy" })}</Link>
  </Message>;

  function handleClose() {
    Storage.set("accept-cookies-policy", true);
    showCookiesAlert(false);
  }

  return (
    <Snackbar
      open={show}
      message={message}
      action={
        <>
          <Button color="secondary" className="accept-cookies-policy" size="small" onClick={handleClose}>
            {intl.formatMessage({ id: "accept" })}
          </Button>
        </>
      } />
  );
}

export default CookiesAlert;