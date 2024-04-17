import {prisma} from "../utilities/prismaClient";

export const postCarreer = async (req, res) => {
    const {name, department} = req.body;

    const newCareer = await prisma.carreer.create({
        data: {
            name,
            department: {
                connect: {
                    id: department
                }
            }
        }
    })

    return res.json(newCareer);
}

export const getCarreer = async (req, res) => {
    const carrers = await prisma.carreer.findMany();

    return res.json(carrers);
}

export const getCarreerId = async (req, res) => {
    const params = req.params.id;
    const param = Number(params);

    const carrers = await prisma.carreer.findFirst({
        where: {
            id: param,
        },
        include:{
            semesters: true
        }
    })

    return res.json(carrers);
}

export const updateCarreer = async (req, res) => {
    const param = req.params.id;
    const body = req.body;

    const updatedCarreer = await prisma.carreer.update({
        where: {id: param},
        data: {...body}
    })

    return res.status(502).json({message: "Carreer updated succesfully"})
}

export const deleteCarreer = async (req, res) => {
    const param = req.params.body;

    const deletedCarreer = await prisma.carreer.delete({
        where: {id: param}
    })

    return res.status(502).json({message: "Carreer deleted successfully"})
}