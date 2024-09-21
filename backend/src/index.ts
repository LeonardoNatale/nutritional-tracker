import { Hono } from 'hono';

type Bindings = {
  SECRET_KEY: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c) => {
  const SECRET_KEY = c.env.SECRET_KEY;
  return c.json({ message: 'Hello', secret: SECRET_KEY });
});

export default app;
