import {prisma} from "../utilities/prismaClient";

export const postCarreer = async (req, res) => {
    const {name, } = req.body;
    prisma.carreer.create({data: {}})
}

export const getCarreer = () => {}

export const getCarreerId = () => {}

export const updateCarreer = () => {}

export const deleteCarreer = () => {}