import { Box } from "@mui/system";
import React from "react";
import TextInput from "../Components/TextInput";
import Typography from "@mui/material/Typography";
import CutomButton from "../Components/CutomButton";

const AddPost = () => {

    const onSubmit = (e) => {
        // alert("Adding");
        e.preventDefault()
    }


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
          <TextInput label="Title" />
          <TextInput label="Body" />
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
