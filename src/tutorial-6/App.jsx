import React, { useEffect, useState } from "react";
import {Box, List, makeStyles, Typography,} from "@material-ui/core";
import Reviews from "./components/list-reviews";
import ListForm from "./components/list-form";

const useStyles = makeStyles((theme) => ({
  list: {
    maxWidth: "360px",
    margin: "20px auto",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #8F8F8F",
  },
  title: {
    margin: theme.spacing(1, 2, 0),
  },
  Input: {
    fontSize: " 16px",
    padding: "2px",
    width: "300px",
  },
}));


const App = () => {
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  const [fields, setFields] = useState({ fullName: "", email: "", text: "", createdAt: ""});
  const parseComments = [...JSON.parse(localStorage.getItem("comments"))]

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments))
  }, [comments])
  useEffect(() => {
    setComments(parseComments);
    }, []);


  const handleInputChange = (event) => {
    let date = new Date()
    const target = event.target;
    const name = target.name;
    setFields({...fields, [name]: target.value,  createdAt: `${date}`});
    console.log(fields)
  };
  console.log(comments)
  const handleDelete = (index) => {
    setComments(prevState => prevState.filter((_ ,i) =>  i !== index) )
  }
  const handleSubmit = () => {
    if (!fields.email.trim() || !fields.fullName.trim() || !fields.text.trim())  {
      alert("Поле не может быть пустым")
    }    else {
      setComments( [...comments, fields])
      setFields({ fullName: "", email: "", text: "", createdAt: ""})
    }
  };

  return (
    <Box>
      <List className={classes.list}>
        <Typography component="p" variant="h6" className={classes.title}>
          Отзывы:
        </Typography>
        {comments.map((el, index) => {
          return <Reviews handleDelete={handleDelete} key={index} comments={el} index={index}/>}
        )}
      </List>
      <ListForm
        fields={fields}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </Box>
  );
};

export default App;
