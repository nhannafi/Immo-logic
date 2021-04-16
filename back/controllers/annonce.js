const { Annonce } = require("../models");

const getAnnonces = (req, res, next) => {
    Annonce.find()
        .then((annonces) => {
            res.send(annonces);
        })
        .catch(next);
};

const getAnnonceByID = (req, res, next) => {
    Annonce.findById(req.params.id)
        .then((annonce) => {
            res.send(annonce);
        })
        .catch(next);
};

const createAnnonce = (req, res, next) => {
    Annonce.create(req.body)
        .then((annonce) => {
            res.send(annonce);
        })
        .catch(next);
};

const updateAnnonceByID = async (req, res) => {
    const modification = await Annonce.updateOne({ _id: req.params.id }, req.body);
    console.log(req.params.id)
    if (modification.ok) {
        const AnnonceUpdate = await Annonce.findById(req.params.id);
        res.send(AnnonceUpdate);

        return;
    }

    res.send("ERROR");

    // Annonce.findByIdAndUpdate(req.params.id, req.body)
    //   .then((Annonce) => {
    //     res.send(Annonce);
    //   })
    //   .catch(next);
};

const deleteAnnonceByID = (req, res, next) => {
    Annonce.findByIdAndDelete(req.params.id)
        .then(() => {
            res.send("deleted");
        })
        .catch(next);
};

module.exports = {
    getAnnonces,
    getAnnonceByID,
    createAnnonce,
    updateAnnonceByID,
    deleteAnnonceByID,
};