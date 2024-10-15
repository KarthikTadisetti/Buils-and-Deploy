import express from 'express';
import path from 'path';

const app = express();
const PORT = 3003;

// Serve static files from the 'public' directory
app.use(express.static(path.join(process.cwd(), 'public')));

// Serve index.html when the root route is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
