const cors = require("cors");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const user = require("./routes/userRouter");
const adminRoute = require("./routes/adminUserRouter");
const donasi = require("./routes/donasiRouter");
const artikel = require("./routes/adminArtikelRouter");
const progam = require("./routes/adminProgramRouter")
const volunteer = require("./routes/volunteerRouter")
const listProgram = require("./routes/listProgramRouter")


// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

const PORT = 5894;

app.use(cors());
app.use(express.json());
app.use(user);
app.use(donasi);
app.use(adminRoute);
app.use(artikel);
app.use(progam);
app.use(volunteer);
app.use(listProgram);

app.listen(PORT, () => {
        console.log(`Server berjalan di port ${PORT}`);
    }

);