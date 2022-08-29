import { FormControlLabel, Grid, Typography, Link } from '@material-ui/core'
import React from 'react'
import { Paper, Avatar, TextField, Checkbox, Button } from '@material-ui/core'





const Login = () =>{
const paperStyle={padding:20, height:'70vh',width:300,margin:"20px auto"}
const avatarStyle = {backgroundColor:'green'}
const btnStyle = {margin:'8px 0'}
  return(
    <Grid>
    <Paper elevation={10} style={paperStyle}>
    <Grid align="center">
    <Avatar style={avatarStyle}></Avatar>
<h2>Login</h2>
</Grid>
<TextField id="standard-basic" placeholder="Enter Username" label="Username" variant="standard" fullWidth required />
<TextField id="standard-basic" placeholder="Enter Password" label="Password" type="password" variant="standard" fullWidth required />
<Grid align="left">
<FormControlLabel
control = {
  <Checkbox
  name="checked"
  color="primary"
  />
}
label="Remember me"
/>
</Grid>
<Button variant="contained" style={btnStyle} type="submit" fullWidth color="secondary">Login</Button>
<Grid align="left">
<Typography>
<Link href="#">
Forget Password?
</Link>
</Typography>
<Typography>Do you have an account?
<Link href="#">
   Register
</Link>
</Typography>
</Grid>
    </Paper>
    </Grid>
  )
}
export default Login