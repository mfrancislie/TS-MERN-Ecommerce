import express, { Request, Response } from 'express'
import { sampleProducts } from './data'

const app = express()

app.get('/api/products', (req: Request, res: Response) => {
  res.json(sampleProducts)
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`served at http://localhost:5000`))
