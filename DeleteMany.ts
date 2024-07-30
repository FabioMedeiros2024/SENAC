import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function main()  {
    let motorista: Prisma.motoristaDeleteArgs
  
    const deleteMotorista = await prisma.motorista.deleteMany({where: {id: {lt: 5}}})
}

main()