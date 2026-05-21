import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaBettersqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };