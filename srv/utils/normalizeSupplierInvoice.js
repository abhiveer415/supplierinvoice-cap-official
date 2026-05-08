function normalizeSupplierInvoice(data) {
  return {
    supplierInvoice: data.SupplierInvoice,
    companyCode: data.CompanyCode,
    fiscalYear: data.FiscalYear
  }
}

module.exports = { normalizeSupplierInvoice }