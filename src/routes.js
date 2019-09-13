const routes = server => {
  server.get("/", (req, res) => res.send("Vai subs! Aula amanhã para subs!!!"));
};

module.exports = routes;
