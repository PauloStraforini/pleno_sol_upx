import express from 'express'; // Adicione esta linha para importar o express
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.psot('/users', async (req, res) => {
  await prisma.user.create({
    data: {
      id: 1,
      key: 'string',
    },
  });
  res.json(user);
});

// Adicione esta linha para o servidor ouvir requisições
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
