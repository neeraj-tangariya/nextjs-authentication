export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    // Implement your user creation logic here, for example:
    // - Hash the password
    // - Save the user to the database

    // Example response
    res.status(201).json({ message: "User registered successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
