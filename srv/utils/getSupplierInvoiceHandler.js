const { validateSupplierInvoice } = require('./validateSupplierInvoice')
const { fetchSupplierInvoice } = require('./fetchSupplierInvoice')

async function getSupplierInvoiceHandler(remoteService, requestData) {

  validateSupplierInvoice(requestData)

  const result = await fetchSupplierInvoice(
    remoteService,
    requestData.SupplierInvoice
  )

  return result
}

module.exports = { getSupplierInvoiceHandler }