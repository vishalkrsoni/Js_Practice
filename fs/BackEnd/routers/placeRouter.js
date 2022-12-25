const { Router } = require('express')
const {
  getPlaceById,
  getPlacesByUserId,
  addPlaceByUserId,
  updatePlaceById,
  deletePlaceById

} = require('../controllers/placesController')

const placeRouter = Router()
placeRouter.get('/:placeId', getPlaceById)
placeRouter.get('place/:userId', getPlacesByUserId)
placeRouter.post('/', addPlaceByUserId)
placeRouter.put('/', updatePlaceById)
placeRouter.delete('/', deletePlaceById)

module.exports = placeRouter