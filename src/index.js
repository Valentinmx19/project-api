import express from "express";
import morgan from "morgan";
import 'dotenv/config';
import cors from "cors";
import userRuote from "./routes/user.routes";
import departmentRoute from "./routes/department.routes";
import carreerRoute from "./routes/carreer.routes";
import groupRoute from "./routes/group.routes";
import subjectRoute from "./routes/subject.routes";
import semesterRoute from "./routes/semester.routes";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());
app.use(morgan('dev'));

app.use("/api/v1", [userRuote, departmentRoute, carreerRoute, groupRoute, subjectRoute, semesterRoute]);

app.listen(port, () => {
    console.log(`server listener in port ${port}`)
})