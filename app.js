const express = require("express");
const app = express();
const dotenv = require("dotenv");
const AllRoutes = require("./routes/userRouter");
const routes = require("./routes/adminUserRouter");
const donasiRoute = require("./routes/donasiRouter");
const artikel = require("./routes/adminArtikelRouter");
const progam = require("./routes/adminProgramRouter")
const volunteer = require("./routes/volunteerRouter")


// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

const PORT = 5894;

app.use(express.json());
app.use(AllRoutes);
app.use(donasiRoute);
app.use(routes);
app.use(artikel);
app.use(progam);
app.use(volunteer);

app.listen(PORT, () => {
        console.log(`Server berjalan di port ${PORT}`);
    }

);