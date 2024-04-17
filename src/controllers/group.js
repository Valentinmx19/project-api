import {prisma} from "../utilities/prismaClient";

export const postGroup = async (req, res) => {
    const {name} = req.body;
    const newGroup = await prisma.group.create({
        data: {name}
    })

    return res.json(newGroup);
};

export const getGroup = async (req, res) => {
    const groups = await prisma.group.findMany();

    return res.json(groups);
};

export const getGroupById = async (req, res) => {
    const id = req.params.id;
    const group = await prisma.group.findFirst({
        where: {id}
    })

    res.json(group);
};

export const updateGroup = async (req, res) => {
    const id = req.params.id;
    const datos = req.body;
    const group = await prisma.group.update({
        where: {id},
        data: {datos}
    })
    res.status(502).json({message: "group updated succesfully"})
};

export const deleteGroup = async (req, res) => {
    const id = req.params.id;
    const group = await prisma.group.delete({
        where: {id}
    })

    res.status(502).json({message: "group deleted succesfully"})
};