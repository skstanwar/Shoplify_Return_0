const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");
// const compression = require("compression");
// const helmet = require("helmet");
const PORT=3000;
// const connectDB = require("./config/db.config");
const app = express();
app.listen(PORT, () => {
	console.log(`Server is running in ${process.env.NODE_ENV} mode, under port ${PORT}.`);
});