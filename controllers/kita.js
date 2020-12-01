const kitas = require("../database/kitas.json");

module.exports.getAll = (req, res, next) => {
  console.log(req.body.page);
  const { page } = req.body;
  const userPage = parseInt(page, 10);
  if (!userPage) return res.send(kitas);
  console.log(typeof userPage);
  const offset = userPage === 0 ? 100 : 100 * userPage;
  console.log({ offset: 100 * userPage });
  const start = userPage === 0 ? 0 : offset - 100;
  console.log({ start: offset - 100 });
  const targetKitas = kitas.slice(start, offset);
  res.send(targetKitas);
};

module.exports.getOne = (req, res, next) => {
  const { id } = req.params;
  const targetKita = kitas.find((kita) => kita.id === parseInt(id, 10));
  if (!targetKita) return res.status(404).send("No such kita");
  res.send(targetKita);
};

module.exports.getFiltered = (req, res, next) => {
  // const targetKitas =
  // res.send(targetKita);
};
