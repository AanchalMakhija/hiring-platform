import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            email: "testuser@example.com",
            name: "Test User",
            password: "securepassword", // Ideally, hash this in a real project
            role: "jobseeker",
        },
    });

    console.log("✅ Seed data inserted successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
