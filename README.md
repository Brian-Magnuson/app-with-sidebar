# App With Sidebar

I was in the process of building an app. I added Next.js, Tailwind CSS, shadcn/ui, Auth.js, and Prisma ORM.
And then, after adding a few components, I realized that the app structure was still pretty universal.
So I thought to make a template in case I wanted to build an app with a similar structure in the future.
I copied over the code, stripped away any specific branding, and made it a generic app with a sidebar layout.

I only made this template for my own use, but if you find it useful, then feel free to use it.

## Contributing

This project is not accepting issues, pull requests, or other contributions from outside contributors.

You are still free to:

- Use the code for any purpose in accordance with the LICENSE file.
- Fork the repository, preserving a copy of the license and copyright notice.
- Make contributions to forked versions as permitted by that fork's owner.

## Tech Stack and References

This project is built with the following technologies and libraries:
- [React](https://react.dev/)
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [Auth.js](https://authjs.dev/)
- [Prisma ORM](https://www.prisma.io/docs/)

For the database, you can use any PostgreSQL database.
I use Neon for hosting my PostgreSQL database.
- [PostgreSQL](https://www.postgresql.org/docs/current/index.html)
- [Neon](https://neon.com/)

## Setup

To get started, clone the repository and install the dependencies:
```bash
npm install
```

Next, set up the authentication secret.
This is a random value used by Auth.js to encrypt tokens and email verification hashes.

If you are using your own database, you can generate the token with the following command:
```bash
npx auth secret
```

This will add the `AUTH_SECRET` variable to your `.env.local` file (creating the file if it doesn't already exist).
```properties
AUTH_SECRET="your-unique-secret"
```

Next, set up the PostgreSQL database.
I use Neon, but you can probably use any PostgreSQL database.
Add the `DATABASE_URL` variable to your `.env` file with the connection string for your database.
```properties
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```

Next, set up Prisma ORM.
Run the following command to make sure the database is up to date with the Prisma schema:
```bash
npx prisma migrate dev
```

This should also generate the Prisma client in `src/generated/prisma`. If you need to regenerate the client later, you can run:
```bash
npx prisma generate
```

After this, you should be good to go!

## Running the Application

To run the development server, use the following command:
```bash
npm run dev
```

## Clean Up

If you need to clean up the project, you can safely delete these directories:
- `.next/`
- `node_modules/`
- `src/generated/`

On Unix-like systems, you can also run from the project root:
```bash
rm -rf .next node_modules src/generated
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

Copyright (c) 2025 Brian Magnuson.
