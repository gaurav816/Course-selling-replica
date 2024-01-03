import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState } from "react";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          Welcome to Gaurera. Sign up here
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth={true}
            label="email"
            variant="outlined"
          />
          <br />
          <br />

          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth={true}
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
            onClick={() => {
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username: email,
                  password: password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              }).then((res) => {
                res.json().then((data) => {
                  localStorage.setItem("token", data.token);
                  window.location = "/";
                  console.log(data);
                  console.log(data.token);
                });
              });
            }}
          >
            Submit
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
