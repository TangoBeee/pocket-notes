const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const dbConnect = require("./utils/dbConnect");
const groupRoutes = require('./routes/group.routes');

dotenv.config();
const app = express();

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// For personal use (pinging the server at intervals of every 5 minutes to ensure 100% uptime)
app.use("/monitor", (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

app.use('/api', groupRoutes);

// Show an error if user trying to access a resource that doesn't exist.
app.use((req, res) => {
  res.status(404).send({
    error: "The resource you are trying to access doesn't exist.",
    ok: false,
  });
});

// Start the server only when we have a valid db connection
dbConnect()
  .then(() => {
    try {
      app.listen(process.env.PORT || 3001, () =>
        console.log(`Server started at PORT: ${process.env.PORT || 3001}`)
      );
    } catch (error) {
      console.log(error.message);
    }
  })
  .catch((error) => {
    console.log(error.message);
  });
