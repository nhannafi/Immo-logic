const {
    getAnnonces,
    getAnnonceByID,
    createAnnonce,
    updateAnnonceByID,
    deleteAnnonceByID,
} = require("../controllers");

const createAnnonceRoutes = (app) => {
    app.get("/annonces", getAnnonces);

    app.post("/annonce", createAnnonce);

    app.get("/annonce/:id", getAnnonceByID);

    app.put("/annonce/:id", updateAnnonceByID);

    app.delete("/annonce/:id", deleteAnnonceByID);
};

module.exports = createAnnonceRoutes;
