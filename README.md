This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. Clonar el repositorio
2. Renombrar el archivo `.env.template` a `.env` y cambiar las variables de entorno.
4. Ejecutar el comando ``` npm install ```
2. Levantar la base de datos
```bash
docker compose up -d
```
5. Ejecutar estos comandos de prisma 
```bash
npx prisma migrate dev
npx prisma generate
```

6. Ejecutar el SEED para [crear la base de datos local](localhost:3001/api/phrases_seed)

7. Ejecutar el comando ``` npm run dev ```

#### Opcionales 
Bajar bases de datos:
```bash
docker-compose down
```

#### Prisma commands
```bash
npx prisma init
npx prisma migrate dev
npx prisma generate
```

## Prod
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
