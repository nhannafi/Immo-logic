const createAnnonceRoutes = require("./annonce");

const createRoutes = (app) => {
  createAnnonceRoutes(app)
  };

module.exports = createRoutes;