const accountList = (req, res) => {
  res.send(`
  <html><body>
    <head>
    <link rel="stylesheet" type="text/css" href="/css/main.css" />
  </head>
  <h1>My Account</h1>
  <table>
    <tr>
      <td>
        <img src="/images/icons-bank/bec.png" class="logo" /></td>
      <td>
        <a href="accounts/123-1-76834-0">Checking</a><br />
        <span class="account-number">123-1-76834-0
      </td>
      <td>
        4,382.75 <span class="thb">THB</span>
      </td>
    </tr>
    <tr>
      <td>
        <img src="/images/icons-bank/bec.png" class="logo" /></td>
      <td>
        <a href="accounts/123-1-77932-1">Savings</a><br />
        <span class="account-number">123-1-77932-1</span>
      </td>
      <td>
        20,893.02 <span class="thb">THB</span>
      </td>    
    </tr>
    <tr>
      <td>
        <img src="/images/icons-bank/bec.png" class="logo" /></td>
      <td>
        <a href="accounts/123-1-77397-1">Savings</a><br />
        <span class="account-number">123-1-77397-1
      </td>
      <td>
        10,000.00 <span class="thb">THB</span>
      </td>
    </tr>  
  </table>

     <a href="/">&lt; Back</a>
  `)
}

module.exports = {
  accountList
}
