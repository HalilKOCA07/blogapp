import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NewBlogForm from "../components/NewBlogForm";
import { Formik } from "formik";
import useApiRequest from "../services/useApiRequest";
import { useSelector } from "react-redux";

const NewBlog = () => {
  const {categories} = useSelector((state) => state.card)
  const { postNewBlog, getInfo } = useApiRequest();
  const initialValues = {
    title: "",
    image: "",
    content: "",
    isPublish: true,
    categoryId: "",
  };


console.log(categories)
  useEffect(() => {
    getInfo("categories")
  })

  const [newBlogInfo, setNewBlogInfo] = useState(initialValues)
  return (
    <>
      <Box>
        <NewBlogForm newBlogInfo={newBlogInfo} setNewBlogInfo={setNewBlogInfo}/>
      </Box>
    </>
  );
};

export default NewBlog;
