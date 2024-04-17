import {prisma} from "../utilities/prismaClient";

export const postSubject = async (req, res) => {
    const {name, semester} = req.body;
    const newSubject = await prisma.subject.create({
        data: {
            name,
            semester: {
                connect: {
                    id: semester
                }
            }
        }
    })

    return res.json(newSubject);
};

export const getSubject = async (req, res) => {
    const subjects = await prisma.subject.findMany();

    return res.json(subjects);
};

export const getSubjectById = async (req, res) => {
    const id = req.params.id;
    const subject = await prisma.subject.findFirst({
        where: {id},
    })

    return res.json(subject);
};

export const updateSubject = async (req, res) => {
    const id = req.params.id;
    const datos = req.body;
    const subject = await prisma.subject.update({
        where: {id},
        data: {datos}
    })

    return res.status(502).json({message: "Subject updated succesfully"})
};

export const deleteSubjetc = async (req, res) => {
    const id = req.params.id;
    const subject = await prisma.subject.delete({
        where: {id},
    })

    return res.status(502).json({message: "Subject deleted succesfully"})
};
