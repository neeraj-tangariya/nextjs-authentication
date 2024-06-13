import NextAuth, { AuthError } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const body = {
          email: credentials.email,
          password: credentials.password,
        };

        const res = await fetch("http://localhost:3000/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        const data = await res.json();

        if (data.status !== 200) {
          throw new AuthError({ cause: data.message });
        }

        return data.data;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
