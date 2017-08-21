import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('posts')
})

router.get('/:id', (req, res) => {
  res.send('world id : ' + req.params.id)
})

export default router
