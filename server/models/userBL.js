import Prisma from '@prisma/client'

const prisma = new Prisma.PrismaClient()
import crypto from 'crypto';

export function createPassword(rawPass) {
    return crypto.createHmac('sha256', process.env.PASSWORD_SECRET)
        .update(rawPass)
        .digest('hex');
}

export async function createNewUser(newUser) {
    return prisma.user.create({
        data: {
            email: newUser.email,
            name: newUser.name,
            password: createPassword(newUser.password),
        }
    });
}

export function login(email, rawPass) {
    return prisma.user.findFirst({
        where: {email: email, password: createPassword(rawPass)}
    })
}
