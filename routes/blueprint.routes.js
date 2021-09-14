const router = require("express").Router();
const BlueprintModel = require("../models/Blueprint.model");
// const PathModel = require("../models/Path.model");
// const StageModel = require("../models/Stage.model");

// GET - will be at /blueprint
router.get("/blueprint", (req, res, next) => {
  res.render("admin/blueprint.hbs");
});

// GET - will be at /blueprint

// router.get('/blueprint', (req ,res, next) => {
//     const { id } = req.params;
//     BlueprintModel.findById(id)
//     .then((path) => res.render('admin/blueprint.hbs', {path}))
//     .catch((err) => console.log(err));
//   })

//doesn't it have to use the UserModel to recognise if the user is an admin?

//then we CREATE a post model -- because we want to send it to the DB?
router.post("/blueprint", (req, res, next) => {
  const { type, description, title } = req.body;
  BlueprintModel.create({ type, description, title }) // have to first be destructed FROM req.body
    .then((freshlyCreatedBlueprint) =>
      res.redirect(`/blueprint/${freshlyCreatedBlueprint._id}/stage`)
    )
    .catch((err) => console.log(err));
});

router.get("/blueprint/:id/stage", (req, res, next) => {
  // put the view of the stage form here
  res.render("admin/stage.hbs");
});

router.post("/blueprint/:id/stage", (req, res, next) => {
  // create the stage
  // Stage.create...
  // use the stage already created and push it into the blueprint stages array
  // Blueprint.finByIdAndUpdate(blueprintId, { })
  Stage.create.push(blueprintId);
  Blueprint.finByIdAndUpdate(blueprintId, {});
});

module.exports = router;