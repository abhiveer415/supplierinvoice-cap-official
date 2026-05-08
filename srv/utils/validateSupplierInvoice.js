function validateSupplierInvoice(data) {

  if (!data.SupplierInvoice) {
    throw new Error('SupplierInvoice is required')
  }

  if (!data.CompanyCode) {
    throw new Error('CompanyCode is required')
  }

  return true
}

module.exports = { validateSupplierInvoice }