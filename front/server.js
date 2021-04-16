const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));


const getAnnonceInfo = (id) => {
  return fetch(`http://localhost:3000/annonce/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((annonce) => {
      return annonce;
    })
    .catch((err) => {
      throw err;
    });
};


const updateAnnonce = (id, body) => {
    return fetch(`http://localhost:3000/annonce/${id}`, body)
      .then((response) => response.json())
      .then((annonce) => {
        return annonce;
      })
      .catch((err) => {
        throw err;
      });
  };

app.get("/", (req, res) => {
  fetch("http://localhost:3000/annonces", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((annonces) => {
      // res.render("pages/home", { annonces: annonces });
      res.render("pages/home", { annonces });
    })
    .catch((err) => {
      throw err;
    });
});

app.get("/annonce/:id", async (req, res) => {
  const annonce = await getAnnonceInfo(req.params.id);

  res.render("pages/annonce", { annonce: annonce });
});

app.get("/create/annonce", (req, res) => {
   
  res.render("pages/create");
});

app.get("/update/annonce/:id", async (req, res) => {
  const annonce = await getAnnonceInfo(req.params.id);

  res.render("pages/update", { annonce: annonce });
});

app.listen(4000, () => {
  console.info("Front-end with EJS running");
});
