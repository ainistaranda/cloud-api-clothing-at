import functions from "firebase-functions"
import express from 'express'
import cors from 'cors'
import { createClothing, updateClothing, getAllClothing, deleteClothing, findOneItem } from './src/clothing.js'

const app = express()
app.use(express.json())
app.use(cors())
app.post('/clothing', createClothing)
app.get('/clothing', getAllClothing)
app.patch('/clothing/:uid', updateClothing)
app.delete('/clothing/:uid', deleteClothing)
app.get('/clothing/:uid', findOneItem)

app.get('/test', (req,res) => res.send('Our cloud api works!'))
export const api = functions.https.onRequest(app)

