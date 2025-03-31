import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
  }));
app.use(express.static('public'));

app.get('/download-resume', (req, res) => {
  const filePath = path.join(__dirname, './public/resume.docx');
  res.download(filePath, 'Aravind_Resume.docx', (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).send('Error downloading resume');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;