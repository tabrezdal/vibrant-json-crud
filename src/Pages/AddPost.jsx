import { Box } from "@mui/system";
import React, { useState } from "react";
import TextInput from "../Components/TextInput";
import Typography from "@mui/material/Typography";
import CutomButton from "../Components/CutomButton";
import TextField from '@mui/material/TextField';

const AddPost = () => {

  const [addNewPostData, setAddNewPostData] = useState([]);

  const onChangeHandler = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    setAddNewPostData({
      ...addNewPostData,
      [name]: val
    });
    console.log(addNewPostData)
  }

    const onSubmit = (e) => {
        // alert("Adding");
        // e.preventDefault()
        addNewPost(addNewPostData);
    }

      // add
  const addNewPost = async (title, body) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body
      }),
    });

    const data = await res.json();

    if(res.status == 201){
      console.log("Post Added Successfully")
    }
    else{
      console.log("Something Went Wrong!")
    }
    setAddNewPostData([...addNewPostData, data]);
  };



  return (
    <div className="container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30vw",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" gutterBottom component="div">
            Add Post
          </Typography>
          {/* <TextInput label="Title" value={title} />
          <TextInput label="Body" value={body} /> */}

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30vw" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Title" value={addNewPostData.title} name="title" onChange={(e) => onChangeHandler(e)} variant="outlined" />
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30vw" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Body" value={addNewPostData.body} name="body" onChange={(e) => onChangeHandler(e)} variant="outlined" />
          </Box>


          <CutomButton
            BGcolor="black"
            color="white"
            width="100%"
            text="Add"
            onClick={() => onSubmit()}
          />
        </Box>
      </Box>
    </div>
  );
};

export default AddPost;
