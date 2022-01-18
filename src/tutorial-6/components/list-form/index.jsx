import {Button, List, makeStyles, TextField, Typography,} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    maxWidth: "360px",
    margin: "20px auto",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #8F8F8F",
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  margin: {
    margin: theme.spacing(1, 4, 1),
    width: "300px",
  },
}));

const ListForm = ({ fields, handleSubmit, handleInputChange }) => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.list}>
        <form className={classes.form} noValidate autoComplete="off">
          <Typography component="p" variant="h5" className={classes.margin}>
            Обратная связь:
          </Typography>
          <TextField
            name="fullName"
            value={fields.fullName}
            onChange={handleInputChange}
            label="Имя"
            variant="outlined"
            className={classes.margin}
          />
          <TextField
            name="email"
            value={fields.email}
            onChange={handleInputChange}
            label="Почта"
            variant="outlined"
            className={classes.margin}
          />
          <TextField
            name="text"
            value={fields.text}
            onChange={handleInputChange}
            label="Текст..."
            multiline
            rows={6}
            variant="outlined"
            className={classes.margin}
          />
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            color="primary"
            className={classes.margin}
          >
            Отправить
          </Button>
        </form>
      </List>
    </>
  );
};

export default ListForm;
