const homepage =
  (req, res) => {
    res.send(`<html><body>
      <p>TODO: Design home page later!</p>
      <p><a href="/accounts">My Accounts</a></p>
    </body></html>`)
  }

module.exports = {
  homepage
}
