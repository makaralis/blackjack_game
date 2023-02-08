import cors from 'cors';
import express from 'express';

import gameRoutes from "./routes/index.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// define routes
app.use('/api/game', gameRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  });
})

// start the server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
