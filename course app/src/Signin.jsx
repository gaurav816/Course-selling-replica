import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
function Signin() {
  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h5"} component="div">
          Welcome Back. Signin here
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          variant={"outlined"}
          style={{
            width: 400,
            padding: 10,
          }}
        >
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <br />
          <br />

          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="password"
            variant="outlined"
          />
          <br />
          <br />

          <Button
            size="large"
            variant="contained"
            style={{
              border: 1,
              backgroundColor: "black",
              color: "white",
            }}
          >
            submit
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
