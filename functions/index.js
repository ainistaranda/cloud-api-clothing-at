import functions  from "firebase-functions"
import express from 'express'
import { } from './src/clothing.js'
import { ResultStorage } from "firebase-functions/v1/testLab"

const app = express()
app.use(express.json())


app.get('/test', (req,res) => res.send('Our cloud api works!'))
export const api = functions.https.onRequest(app)