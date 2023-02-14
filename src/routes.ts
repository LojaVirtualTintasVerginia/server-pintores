import express from 'express'

import multer from 'multer'
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const upload = multer(multerConfig)

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)
routes.get('/pintores', pointsController.index)
routes.get('/pintores/:id', pointsController.show)
routes.get('/home', pointsController.home)
routes.delete('/delete/:id', pointsController.delete)
routes.put('/validar/:id', pointsController.validar)

routes.post(
  '/pintores',
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'obra', maxCount: 1 },
    { name: 'obra1', maxCount: 1 },
    { name: 'obra2', maxCount: 1 },
  ]),
  pointsController.create,
)

export default routes
