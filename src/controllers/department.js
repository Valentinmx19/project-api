import { prisma } from "../utilities/prismaClient";

export const postDepartment = async (req, res) => {
    const body = req.body;
    console.log(req.body)
    const newDepartment = await prisma.department.create({data: {...body}})
    return res.json(newDepartment);
};

export const getDepartment = async (req, res) => {
    const departments = await prisma.department.findMany();

    return res.json(departments);
};

export const getDepartmentById = async (req, res) => {
    const params = req.params.id;
    const param = Number(params);
    const department = await prisma.department.findFirst({
        where: {id: param},
        include: {
            carreers: true,
        }
    })

    return res.json(department);
};

export const updateDepartment = async (req, res) => {
    const param = req.params.id;
    const body = req.body;

    const updatedDepartment = await prisma.department.update({
        where: {id: param},
        data: {...body}
    })

    return res.status(502).json({message: "Department update succesfully"})
};

export const deleteDepartmetn = async (req, res) => {
    const param = req.params.id;
    const deletedDeparatment = await prisma.department.delete({
        where: {id: param}
    })

    return res.status(502).json({message: "Department deleted succesfully"})
};