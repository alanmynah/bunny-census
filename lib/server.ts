import app from "./app";

app.listen(process.env.PORT, () => {
  console.log("Express server listening on port " + process.env.PORT || 8080);
});
