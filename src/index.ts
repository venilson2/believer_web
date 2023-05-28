import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const viewsPath = path.join(__dirname, '..', 'src', 'views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');
app.use(express.json());

interface RequestBody {
  name: string;
}

app.get('/', (req: Request, res: Response) => {
  const data = {
    message: 'Hello',
  };
  return res.render('index', { data });
});

app.listen(3000, () => console.log('Listening on port 3000'));
