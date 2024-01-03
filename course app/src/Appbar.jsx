import { Button, Typography, colors } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { red } from "@mui/material/colors";

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setuserEmail] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        if (data.username) {
          setuserEmail(data.username);
        }
      });
    });
  }, []);

  if (userEmail) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          backgroundColor: "black",
        }}
      >
        <div>
          <Typography
            variant={"h5"}
            style={{
              color: "white",
              padding: 5,
            }}
          >
            Coursera
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              marginRight: 10,
            }}
          >
            <Button
              variant={"contained"}
              style={{
                border: 1,
                backgroundColor: "white",
                color: "black",
              }}
              onClick={() => {
                navigate("/course");
                // window.location = "/signin";
              }}
            >
              Add Course
            </Button>
          </div>
          <div
            style={{
              marginRight: 10,
            }}
          >
            <Button
              variant={"contained"}
              style={{
                border: 1,
                backgroundColor: "white",
                color: "black",
              }}
              onClick={() => {
                navigate("/allcourse");
                // window.location = "/signin";
              }}
            >
              ALL Course
            </Button>
          </div>
          <div
            style={{
              padding: 10,
              marginRight: 10,
            }}
          >
            <div>{userEmail}</div>
          </div>
          <div>
            <Button
              variant={"contained"}
              onClick={() => {
                localStorage.setItem("token", null);
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
        backgroundColor: "black",
      }}
    >
      <div>
        <Typography
          variant={"h5"}
          style={{
            color: "white",
            padding: 5,
          }}
        >
          Coursera
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          padding: 5,
        }}
      >
        <div
          style={{
            marginRight: 10,
          }}
        >
          <Button
            variant={"contained"}
            style={{
              border: 1,
              backgroundColor: "white",
              color: "black",
            }}
            onClick={() => {
              navigate("/signin");
              // window.location = "/signin";
            }}
          >
            Sign In
          </Button>
        </div>
        <div>
          <Button
            variant={"contained"}
            style={{
              border: 1,
              backgroundColor: "white",
              color: "black",
            }}
            onClick={() => {
              navigate("/signup");
              // window.location = "/signup";
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Appbar;
