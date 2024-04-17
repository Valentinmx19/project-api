import {prisma} from "../utilities/prismaClient";

export const postSemester = async (req, res) => {
    const {name, carreer} = req.body;

    const newSemester = await prisma.semester.create({
        data: {
            name, 
            carreer: {
                connect: {
                    id: carreer
                }
            }
        }
    })

    return res.json(newSemester);
};

export const getSemester = async (req, res) => {
    const semesters = await prisma.semester.findMany();

    return res.json(semesters);
};

export const getSemesterById = async () => {
    const id = req.params.id;

    const semester = await prisma.semester.findFirst({
        where: {id}
    })

    return res.json(semester);
};

export const updateSemester = async () => {
    const id = req.params.id;
    const datos = req.body;

    const semester = await prisma.semester.update({
        where: {id},
        data: {datos}
    })

    return res.status(502).json({message: "Semester updated succesfully"})
};

export const deleteSemester = async (req, res) => {
    const id = req.params.id;

    const semester = await prisma.semester.delete({
        where: {id}
    })

    return res.status(502).json({message: "Semester deleted succesfully"})
};