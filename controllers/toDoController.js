const { User, ToDoList } = require("../models");

module.exports = {
  view: async (req, res, next) => {
    const id = +req.user.id;
    const todo = await ToDoList.findAll({
      where: { user_id: id },
    });
    // const todo = await ToDoList.findAll({});

    res.json(todo);
    // try {
    //   const todo = await ToDoList.findAll({});

    //   res.status(200).json({ todo });
    // } catch (error) {
    //   res.status(200).next({ message: error });
    // }
  },

  create: async (req, res, next) => {
    const { body } = req.body;
    const id = +req.user.id;

    const todo = await ToDoList.create({ user_id: id, body });

    res.status(200).json(`New task: ${todo.body}`);
    // try {
    //   const todo = await ToDoList.create({ user_id: id, body });

    //   res.status(200).json(`New task: ${todo.body}`);
    // } catch (error) {
    //   res.status(200).next({ message: error });
    // }
  },
};
