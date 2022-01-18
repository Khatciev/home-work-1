import React from "react";
import {Avatar, Box, Button, ListItem, ListItemAvatar, makeStyles, Typography,} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1, 4, 1),
  },
}));

const Reviews = (props) => {
  const classes = useStyles();

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <Box>
          <Typography component="h6">{props.comments.fullName}</Typography>
          <Typography component="p">{props.comments.text}</Typography>
        </Box>
        <Button
          variant="contained"
          size="large"
          onClick={() => props.handleDelete(props.index)}
          color="secondary"
          className={classes.margin}
        >
          Удалить
        </Button>
      </ListItem>
    </>
  );
};

export default Reviews;
