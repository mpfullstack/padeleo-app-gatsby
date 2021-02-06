import * as React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';

const Panel = ({ children, title }) => {
  return (
    <Card>
      {title ? <CardHeader
        title={title}
      /> : null}
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default Panel;

// action={
//   <IconButton aria-label="settings">
//     <MoreVertIcon />
//   </IconButton>
// }