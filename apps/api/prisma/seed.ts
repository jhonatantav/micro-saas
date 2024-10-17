import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function seed() {
  await prisma.organization.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "johndoe@example.com",
      passwordHash: await hash("12345678", 1),
      avatarUrl: "http://github.com/jhonatantav.png",
    },
  });

  const anotherUser = await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      passwordHash: await hash("12345678", 1),
      avatarUrl: faker.image.avatarGitHub(),
    },
  });

  const anotherUser2 = await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      passwordHash: await hash("12345678", 1),
      avatarUrl: faker.image.avatarGitHub(),
    },
  });

  await prisma.organization.create({
    data: {
      name: "Test Organization",
      domain: "test.org",
      slug: "test.org",
      avatarUrl: faker.image.avatarGitHub(),
      shouldAttachUsersByDomain: true,
      ownerId: user.id,
      projects: {
        createMany: {
          data: [
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([
                user.id,
                anotherUser.id,
                anotherUser2.id,
              ]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([
                user.id,
                anotherUser.id,
                anotherUser2.id,
              ]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([
                user.id,
                anotherUser.id,
                anotherUser2.id,
              ]),
            },
          ],
        },
      },
      members: {
        createMany: {
          data: [
            { userId: user.id, role: "ADMIN" },
            { userId: anotherUser.id, role: "MEMBER" },
            { userId: anotherUser2.id, role: "MEMBER" },
          ],
        },
      },
    },
  });

  await prisma.organization.create({
    data: {
      name: "Member Inc",
      slug: "Member.org",
      avatarUrl: faker.image.avatarGitHub(),
      ownerId: user.id,
      projects: {
        createMany: {
          data: [
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([
                user.id,
                anotherUser.id,
                anotherUser2.id,
              ]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([
                user.id,
                anotherUser.id,
                anotherUser2.id,
              ]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([
                user.id,
                anotherUser.id,
                anotherUser2.id,
              ]),
            },
          ],
        },
      },
      members: {
        createMany: {
          data: [
            { userId: user.id, role: "MEMBER" },
            { userId: anotherUser.id, role: "ADMIN" },
            { userId: anotherUser2.id, role: "MEMBER" },
          ],
        },
      },
    },
  });

  await prisma.organization.create({
    data: {
      name: "Billing Inc",
      slug: "billing.inc",
      avatarUrl: faker.image.avatarGitHub(),
      ownerId: user.id,
      projects: {
        createMany: {
          data: [
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([
                user.id,
                anotherUser.id,
                anotherUser2.id,
              ]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([
                user.id,
                anotherUser.id,
                anotherUser2.id,
              ]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([
                user.id,
                anotherUser.id,
                anotherUser2.id,
              ]),
            },
          ],
        },
      },
      members: {
        createMany: {
          data: [
            { userId: user.id, role: "BILLING" },
            { userId: anotherUser.id, role: "ADMIN" },
            { userId: anotherUser2.id, role: "MEMBER" },
          ],
        },
      },
    },
  });
}

seed().then(() => {
  console.log("Seeding...");
});
