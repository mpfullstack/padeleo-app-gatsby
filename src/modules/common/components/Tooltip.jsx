import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import UITooltip from "@material-ui/core/Tooltip";

const StyledTooltip = withStyles({
  tooltip: {
    fontSize: "14px",
  }
})(UITooltip);

const Tooltip = ({
  title,
  children
 }) => {
  return (
    <StyledTooltip title={title} aria-label={title}>
      {children}
    </StyledTooltip>
  );
};

export default Tooltip;
