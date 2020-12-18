const accountDetails = (req, res, next) => {
  res.send(`
  <h1>This is account ${req.params.number}</h1>
  <a href="/accounts">&lt; Back</a>
  `)
}

module.exports = {
  accountDetails
}
