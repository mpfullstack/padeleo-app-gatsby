import * as React from "react";
import MuiSnackbar from '@material-ui/core/Snackbar';

const Snackbar = ({
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  },
  open,
  message,
  action
}) => {
  return (
    <MuiSnackbar
      anchorOrigin={anchorOrigin}
      open={open}
      message={message}
      action={action}
    />
  );
}

export default Snackbar;
