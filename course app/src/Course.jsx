import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useState } from "react";
function Course() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Image, setImage] = useState("");

  return (
    <div>
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
              setTitle(e.target.value);
            }}
            fullWidth={true}
            label="Title"
            variant="outlined"
          />
          <br />
          <br />

          <TextField
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            fullWidth={true}
            label="Description"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setImage(e.target.value);
            }}
            fullWidth={true}
            label="Image link"
            variant="outlined"
          />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              style={{
                border: 1,
                backgroundColor: "black",
                color: "white",
              }}
              onClick={() => {
                fetch("http://localhost:3000/admin/courses", {
                  method: "POST",
                  body: JSON.stringify({
                    title: title,
                    description: description,
                    imageLink: Image,
                    published: true,
                  }),
                  headers: {
                    "Content-type": "application/json",
                    Authorization: "bearer " + localStorage.getItem("token"),
                  },
                }).then((res) => {
                  res.json().then((data) => {
                    alert("course added");
                    console.log(data);
                    console.log(data.token);
                  });
                });
              }}
            >
              Create
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
export default Course;
