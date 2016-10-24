'use strict'

module.exports = {
  header: {
    method: 'POST',
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
    }
  },
  api: {
    base: 'https://cz.redlion56.com/gwcz/',
    goodsList: 'carrier/auction/getAuctionByType.do'
  }
}
