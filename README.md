![Illustration](https://raw.githubusercontent.com/Pixselve/typescript-graphql-api-template/master/main-illustration.png "Illustration")

# Installation

Create a .env file under the prisma directory with a variable named "DATABASE_URL" with your database connection string. For exemple with a PostgreSQL database.
```dotenv
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```
If you don't use PostgreSQL, change the datasource settings in the .prisma file :
```prisma
datasource db {
  provider = "postgresql" OR "mysql"
  url      = env("DATABASE_URL")
}
```
More info on the [Prisma official documentation](https://github.com/prisma/prisma).

After that, run `npm install` to install all the dependencies and generate the Prisma client.

Use `npm run start:dev` to start the server as a development environment.
# Production deployment
```npm
npm run build # Build the server
npm run start # Start the server
```
