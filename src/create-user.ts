import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Godwin',
      email: 'Godwin@prisma.io',
    },
  })
  console.log(user,'user')
}

main()
  .then(async () => {
    console.log("created user succesfully");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })