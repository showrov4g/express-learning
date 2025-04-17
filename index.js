import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 3000;

app.use(express.json());

const users = []; // Fake in-memory user store

// ✅ Index route
app.get('/', (req, res) => {
    res.send("Hello Express!");
});

// ✅ Register route
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).send("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    users.push({
        username,
        password: hashPassword,
    });

    res.send('User registered successfully');
});

// ✅ Login route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(401).send('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).send('Invalid credentials');
    }

    // Generate JWT
    const token = jwt.sign({ username }, 'test#secret', { expiresIn: '1h' });

    res.json({ token }); // Optional: `Bearer ${token}` for frontend use
});

// ✅ Protected route
app.get('/dashboard', (req, res) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).send("Access token missing");
    }

    const token = authHeader.split(" ")[1]; // Remove "Bearer " part

    try {
        const decoded = jwt.verify(token, 'test#secret');
        res.send(`Welcome ${decoded.username}`);
    } catch (err) {
        res.status(401).send("Invalid or expired token");
    }
});

// ✅ Catch-all route
app.use((req, res) => {
    res.status(404).send("Sorry, this route is not found");
});

// ✅ Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on PORT ${PORT}`);
});
