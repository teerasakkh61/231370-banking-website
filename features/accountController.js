const accountList = (req, res) => {
  res.render('account-list')
}

const accountDetails = (req, res, next) => {
  res.render('account-details', { accountNumber: req.params.number })
}

module.exports = {
  accountDetails,
  accountList
}
