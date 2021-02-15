import * as React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';

const Panel = ({ children, title, action }) => {
  return (
    <Card>
      <CardHeader
        title={title}
        action={action}
      />
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