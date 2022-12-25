
const isAdmin = () => {

  try {
    await User.find({ isDeleted: false }, { isAdmin: true })

    resizeBy.send({

    })
  } catch (err) {

  }
}