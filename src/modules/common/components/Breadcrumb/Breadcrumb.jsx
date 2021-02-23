import * as React from "react";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const Breadcrumb = ({ children, ...rest }) => {
  return (
    <Breadcrumbs aria-label="breadcrumbs" {...rest}>
      {children}
    </Breadcrumbs>
  );
}

export default Breadcrumb;