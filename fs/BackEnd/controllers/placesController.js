const HttpError = require('../models/httpError')
const Place = require('../models/place')
const User = require('../models/user')


const getPlaceById = async (req, res, next) => {
  const placeId = req.params.placeId;
  let place;
  try {
    place = await Place.findById(placeId)
  } catch (err) {
    // error if get request have problem/missing info
    const error = new HttpError(
      'Something went wrong, could not find place',
      500
    )
    return next(error)
  }
  if (!place) {
    // if place id does not exist
    const error = new HttpError(
      'No such place exists for the given Id',
      404
    )
    return next(error)
  }
  res.json({
    // mongoose object to normal object
    place: place.toObject({ getters: true }),// to get id property by getters

  })
}

const getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.userId
  let places
  try {
    places = await Place.find({ creator: userId })
  } catch (err) {
    // error if get request have problem/missing info
    const error = new HttpError(
      ' Could not find places ',
      500
    )
    return next(error)
  }

  if (!places || places.length === 0) {
    return next(
      new HttpError(
        'Could not find places for given user',
        404
      )
    )
  }
  res.json({
    // mongoose object to normal object
    places: places.map(place => place.toObject({ getters: true })),// to get id property
  })
}


const addPlaceByUserId = async (req, res, next) => {
  const userId = req.params.userId
  try {

  } catch (err) {

  }
}

const updatePlaceById = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError(
      'Invalid data passed',
      422
    )
  }
  const placeId = req.params.placeId
  const { title, description } = req.body;
  let place;
  try {
    place = await Place.findById(placeId)

  } catch (err) {
    const error = new HttpError(
      ' Could not update place ',
      500
    )
    return next(error)
  }

  place.title = title;
  place.description = description;

  try {
    await place.save()
  } catch {

    const error = new HttpError(
      ' Could not update place ',
      500
    )
    return next(error)
  }
  res.json({
    place: place.toObject({ getters: true })
  })
}

const deletePlaceById = async (req, res, next) => {
  const placeId = req.params.placeId
  let place
  try {
    place = await Place.findById(placeId)
  } catch (err) {
    const error = new HttpError(
      ' Could not delete place ',
      500
    )
    return next(error)
  }
  try {
    await place.remove()
  } catch (err) {
    const error = new HttpError(
      ' Could not update place ',
      500
    )
    return next(error)
  }
  res.json({
    message: 'deleted successfully'
  })

}

module.exports = {
  getPlaceById,
  getPlacesByUserId,
  addPlaceByUserId,
  updatePlaceById,
  deletePlaceById

}