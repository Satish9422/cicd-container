const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello $(hostname)"));
const getIP = async () => ec2.describeInstances(params, (err, data) => {
  if (err) return err
  return data.Reservations[0].Instances[0].PublicIpAddress
}).promise()

const ip = await getIP()
console.log(ip)

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
