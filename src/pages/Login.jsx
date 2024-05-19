import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Link, Typography } from "@mui/material";
import useAuthRequest from "../services/useAuthRequest";
import { Formik, Form } from "formik";

const Login = () => {
  const { login } = useAuthRequest();

  return (
    <Box
      variant="content"
      sx={{
        p: 18,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "25ch",
          },
        }}
        onSubmit={(values, actions) => {
          login(values);
          actions.resetForm();
          actions.setSubmitting();
        }}
      >
        {({
          handleChange,
          handleBlur,
          touched,
          errors,
          isSubmitting,
          values,
        }) => (
          <Form>
            <Box sx={{display:"flex", flexDirection:"column", gap:2}}>
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button type="submit" variant="contained" disabled={isSubmitting}>Submit</Button>
            </Box>
          </Form>
        )}
      </Formik>
      <Box>
        <Typography>
          Don't have any account? <Link>Register</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
