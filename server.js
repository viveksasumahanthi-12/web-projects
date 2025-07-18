import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// ✅ Serve index.html at root URL "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ✅ Serve success.html explicitly
app.get('/success.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'success.html'));
});

// ✅ Send OTP route
app.post('/send-otp', async (req, res) => {
  // Your nodemailer logic here
  res.json({ success: true }); // Temporary response
});

// ✅ Verify OTP route
app.post('/verify-otp', (req, res) => {
  // Your verification logic here
  res.json({ verified: true }); // Temporary response
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
