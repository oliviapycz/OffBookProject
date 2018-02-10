exports.ownAccount = (req, res, next) => {
  // Grâce au middleware authJwt, on récupere le user
  const userId = req.params.id_user || req.body.id_user
  const isOwner = req.user.id_user === +userId
  return isOwner
    ? next()
    : res.status(401).json({ error: authorizationErr })
}
