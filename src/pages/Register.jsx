import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormHelperText } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  pass: "",
  cpass: "",
  role: "",
};

const registerSchema = Yup.object({
  fname: Yup.string().min(2).max(25).required("please enter your first name"),
  lname: Yup.string().min(2).max(25).required("please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  pass: Yup.string().min(6).required("Pleaase enter password with min 6 char"),
  cpass: Yup.string()
    .required()
    .oneOf([Yup.ref("pass"), null], "Password must match"),
});

const Register = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:registerSchema,
    onSubmit: (values) => {
      console.log("form vals", values);
      alert("sucessfull");
    },
  });


  return (
    <Container maxWidth="lg" sx={{margin:"1.5rem auto"}}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Typography
            variant="h4"
            gutterBottom
            style={{ fontWeight: 600 }}
            textAlign="center"
          >
            Login or Create An Account
          </Typography>
          <Box>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
              Personal Information
            </Typography>
            <hr />
            <Typography variant="body1" gutterBottom color="grey">
              Please enter your information to create your account.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  First Name *
                </Typography>
                <TextField
                  type="text"
                  size="small"
                  fullWidth
                  name="fname"
                  value={values.fname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.fname && touched.fname ? errors.fname :null}
                  error={errors.fname && touched.fname}
                />
              
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  Last Name *
                </Typography>
                <TextField
                  type="text"
                  size="small"
                  fullWidth
                  name="lname"
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.lname && touched.lname ? errors.lname :null}
                  error={errors.lname && touched.lname}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  Email Address *
                </Typography>
                <TextField
                  type="email"
                  size="small"
                  fullWidth
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.email && touched.email ? errors.email :null}
                  error={errors.email && touched.email}
                />
              </Grid>
              <Grid item xs={6} >
                <Typography variant="body1" gutterBottom>
                  Role *
                </Typography>
                <Select
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="role"
                  size="small"
                  fullWidth
                 displayEmpty
                >
                  <MenuItem value="User" defaultChecked>User</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
                
                
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
              Login Information
            </Typography>
            <hr />

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  Password *
                </Typography>
                <TextField
                  type="password"
                  size="small"
                  fullWidth
                  name="pass"
                  value={values.pass}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.pass && touched.pass ? errors.pass :null}
                  error={errors.pass && touched.pass}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  Confirm Password *
                </Typography>
                <TextField
                  type="password"
                  size="small"
                  fullWidth
                  name="cpass"
                  value={values.cpass}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.cpass && touched.cpass ? errors.cpass :null}
                  error={errors.cpass && touched.cpass}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Button
              type="submit"
              variant="contained"
              color="error"
              sx={{ textTransform: "capitalize", backgroundColor: "#f14d54" }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default Register;
