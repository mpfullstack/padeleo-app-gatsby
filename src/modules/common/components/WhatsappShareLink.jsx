import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { WhatsAppIcon } from "../components/Icon";

// TODO: Define react prop

const StyledButton = styled(Button)`
  &.MuiButton-containedPrimary {
    margin-top: 10px;
    width: 100%;
    background-color: #3ebe2b;
    &:hover {
      background-color: #329123;
    }
    .MuiButton-label {
      font-weight: 800;
    }
  }
`;

const WhatsappShareLink = ({
  children,
  shareContent,
  phone = "",
  encode = true,
}) => {
  let shareContentEncoded = shareContent;

  if (encode && typeof window === "object") {
    shareContentEncoded = encodeURIComponent(shareContent);
  }

  return (
    <StyledButton
      variant="contained"
      color="primary"
      startIcon={<WhatsAppIcon />}
      href={`https://wa.me/${phone}?text=${shareContentEncoded}`}
    >
      {children}
    </StyledButton>
  );
};

export default WhatsappShareLink;
