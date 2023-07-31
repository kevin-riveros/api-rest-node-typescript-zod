import express from 'express'
import 'dotenv/config'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API REST with express & TypeScript 🚀')
})

app.listen(process.env.PORT || 3001, () => {
  console.log(`✅ SERVER running in port: ${process.env.PORT || 3001}`)
})
