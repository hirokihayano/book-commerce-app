// import { PrismaClient } from "@prisma/client";

// let prisma: PrismaClient;

// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient | undefined;
// };

// if (!globalForPrisma.prisma) {
//   console.log("DATABASE_URL:", process.env.DATABASE_URL); // Add this line
//   globalForPrisma.prisma = new PrismaClient();
// }

// prisma = globalForPrisma.prisma;

// export default prisma;

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";


let prisma: PrismaClient;

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};
const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = new PrismaClient({adapter});
}

prisma = globalForPrisma.prisma;

export default prisma;

