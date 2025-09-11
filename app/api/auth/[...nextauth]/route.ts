import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import { compare } from 'bcryptjs';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(crendentials) {

                if (!crendentials?.email || !crendentials?.password) return null

                try {
                    const [rows]: any = await db.query("SELECT * FROM users WHERE email = ? LIMIT 1", [crendentials.email]);
                    const user = rows[0];

                    if (!user) return null;

                    const passwordMatch = await compare(
                        crendentials.password,
                        user.password
                    );

                    if (!passwordMatch) return null

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email
                    }


                } catch (err) {
                    console.error("Login Error: ", err);

                    return null
                }

            },
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/admin/login"
    },
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST };