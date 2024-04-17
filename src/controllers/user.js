import { prisma } from "../utilities/prismaClient"

export const postUser = async (req, res) => {
    const {matricula, password, name, firstname, lastname, age, email, numberphone, rol} = req.body;
    console.log(req.body);

    if(!req.body.groupId && rol === "student"){
        const newUser = await prisma.user.create({data: {
            matricula,
            password,
            name,
            firstname,
            lastname,
            age,
            email,
            numberphone,
            student: {
                create: {
                    carreer: {
                        connect: {
                            id: req.body.carreerId
                        }
                    }
                },
            }
        }})

        return res.json(newUser);
    }

    if(req.body.groupId && rol === "student"){
        const newUser = await prisma.user.create({data: {
            matricula,
            password,
            name,
            firstname,
            lastname,
            age,
            email,
            numberphone,
            student: {
                create: {
                    carreer: {
                        connect: {
                            id: req.body.carreerId
                        }
                    },
                    group: {
                        connect: {
                            id: req.body.groupId
                        }
                    }
                }
            }
        }})

        return res.json(newUser);
    }

    if(rol === "teacher"){
        const newUser = await prisma.user.create({data: {
            username,
            password,
            name,
            firstname,
            lastname,
            age,
            email,
            numberphone,
            teacher: {
                connect: {
                    
                }
            }
        }})

        return res.json(newUser);
    }

    if(rol === "admin"){
        const newUser = await prisma.user.create({data: {
            username,
            password,
            name,
            firstname,
            lastname,
            age,
            email,
            numberphone,
            admin: {
                connect: {
                    department: {
                        id: ""
                    }
                }
            }
        }})

        return res.json(newUser);
    }
}

export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    
    return res.json(users);
}

export const getUserId = async (req, res) => {
    const param = req.params.id;
    const user = await prisma.user.findFirst({
        where: {id: param}
    })

    return res.json(user);
}

export const updateUser = async (req, res) => {
    const param = req.params.id;
    const body = req.body;
    const user = await prisma.user.update({
        where: {
            id: param
        },
        data: {
            ...body
        }
    })

    return res.status(502).json({message: "user updated succesfully"})
}

export const deleteUser = async (req, res) => {
    const param = req.params.id;
    const user = await prisma.user.delete({
        where: {
            id: param
        }
    })

    return res.status(502).json({message: "user deleted succesfully"})
}