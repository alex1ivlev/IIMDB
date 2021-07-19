import Prisma from '@prisma/client'
const prisma = new Prisma.PrismaClient()


async function main() {
    await prisma.user.create({
        data: {
            email: 'Alex@walla.co.il',
            name: 'Alex Ivlev Baku',
            password: "12345",
        },

    })
    await prisma.user.create({
        data: {
            email: 'AlmogBaku2@gmail.com',
            name: 'Almog Baku',
            password: "12345",
        },

    })
    await prisma.movie.create({
        data: {
            title: "Wonder Woman",
            rating: 7.4 ,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7hu3ENZBLBBan46j8boQi8k9KTZ6KYIJNIg&usqp=CAU ",
            releaseDate: null ,
            userId: 1
        },
    })

    const allMovies = await prisma.movie.findMany({})
    console.dir(allMovies, { depth: null })
}
main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
