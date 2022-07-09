const notFound = (req, res) => {
  return res.status(404).json({ msg: "Route dose not exist" })
}
module.exports = notFound
