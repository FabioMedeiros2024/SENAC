import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function main()  {
    let motorista: Prisma.motoristaCreateInput;
  
    // Check if posts should be included in the query
      motorista = {
        nome: 'fff',
        CNH: '402520'
      }
    // Pass 'user' object into query
    const createMotorista = await prisma.motorista.create({ data: motorista })
}

main()