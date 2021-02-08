import * as React from "react";
import Grid from '@material-ui/core/Grid';

const Col = ({ children, xs = 12, ...rest }) => {
  return <Grid item xs={xs} {...rest}>{children}</Grid>;
}

const Row = ({ children, ...rest }) => {
  return <Grid container spacing={3} {...rest}>{children}</Grid>;
}

export {
  Grid,
  Row,
  Col
};
