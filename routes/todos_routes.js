import express from "express";
import todo from "../model/todo.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newtodo = new todo({
      data: req.body.data,
      createdAt: Date.now(),
    });

    await newtodo.save();

    res.status(200).send("New Todo add");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const alltodos = await todo.find({}).sort({ createdAt: -1 });
    res.status(200).send(alltodos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const todoerf = await todo.findById(req.params.id);

    const newtodo = await todo.findOneAndUpdate(
      { _id: req.params.id },
      { done: !todoerf.done }
    );
    await newtodo.save();
    res.status(200).send(newtodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await todo.findOneAndUpdate(
      { _id: req.params.id },
      { data: req.body.data }
    );
    const updatetodo = todo.findById(req.params.id);
    res.status(200).send(updatetodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const deletetodo = await todo.findByIdAndDelete(req.params.id);

    res.status(200).send(deletetodo);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
