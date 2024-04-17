import { prisma } from "../utilities/prismaClient";

export const getUsernameDuplicate = async (req, res, next) => {
    const { username } = req.body;

    const usernameDuplicated = await prisma.user.findFirst({
        where: {username}
    })

    if(usernameDuplicated){
        return res.status(204).json({message: "El Usename ya existe, inserte otro"})
    }

    next();
};

export const getEmailDuplicate = async (req, res, next) => {
    const { email }  = req.body;

    const emailDuplicate = await prisma.user.findFirst({
        where: {email}
    }) 

    if(emailDuplicate){
        return res.status(204).json({message: "El email ya existe, inserte otro"})
    }

    next();
}

export const signIn = async() => {
    const userFound = await prisma.user.findFirst({
        where: {
            matricula: req.body.matricula,
            password: req.body.password
        }
    })

    if(!userFound) return res.status(400).json({message: "Los datos no coinciden"})

    return res.json(userFound);
};