import { Box, Button, TextField } from "@mui/material";
import { Form } from "formik";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useApiRequest from "../services/useApiRequest";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewBlogForm = ({ newBlogInfo, setNewBlogInfo, initialValues }) => {
  const { postNewBlog, getInfo } = useApiRequest();
  const { categories } = useSelector((state) => state.card);
  const navigate = useNavigate();
  console.log(newBlogInfo)

  const handleChange = (e) => {
    setNewBlogInfo({ ...newBlogInfo, [e.target.name]: e.target.value });

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    postNewBlog("blogs", newBlogInfo);
    getInfo("blogs");
    setNewBlogInfo(initialValues);
  };
  return (
    <Box
      content="form"
      style={{ display: "flex", justifyContent: "center", margin: 100 }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", width: 300, gap: 1 }}
      >
        <TextField
          id="title"
          name="title"
          type="title"
          label="Title"
          variant="outlined"
          value={newBlogInfo.title}
          onChange={handleChange}
        />
        <TextField
          id="image"
          name="image"
          type="url"
          label="Image URL"
          variant="outlined"
          value={newBlogInfo.image}
          onChange={handleChange}
        />
        <FormControl fullWidth>
          <InputLabel id="categoryId">Categories</InputLabel>
          <Select
            labelId="categoryId"
            id="categoryId"
            name="categoryId"
            value={newBlogInfo.categoryId}
            label="Categories"
            variant="outlined"
            onChange={handleChange}
          >
            {categories.map(({ _id, name }) => (
              <MenuItem key={_id} value={_id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="isPublish"
            id="isPublish"
            name="isPublish"
            value={newBlogInfo.isPublish}
            label="Status"
            variant="outlined"
            onChange={handleChange}
          >
 
            <MenuItem value={null} >Pleade Choose</MenuItem>
            <MenuItem value={false}>Draft</MenuItem>
            <MenuItem value={true}>Published</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="content"
          name="content"
          type="content"
          label="Content"
          variant="outlined"
          value={newBlogInfo.content}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          ADD NEW BLOG
        </Button>
      </Box>
    </Box>
  );
};

export default NewBlogForm;
