import Prisma from '@prisma/client'

const prisma = new Prisma.PrismaClient()

export async function getAllActors(){
    return prisma.actor.findMany({});

}

export async function getActorById(id){
    return prisma.actor.findFirst({
        where: {id: parseInt(id)}
    })
}

export async function createActor(actor){
    return prisma.actor.create({
        data: actor
    });
}
export async function updateActor(id, actor){
    return prisma.actor.update({
        where: {id: parseInt(id)},
        data: actor
    })
}

export async function deleteActor(id){
    return prisma.actor.delete({
        where: {id: parseInt(id)}
    })
}
