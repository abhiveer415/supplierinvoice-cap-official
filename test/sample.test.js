const { normalizeSupplierInvoice } = require('../srv/utils/normalizeSupplierInvoice')

test('normalizes supplier invoice payload', () => {
  const result = normalizeSupplierInvoice({
    SupplierInvoice: '5100000010',
    CompanyCode: '1000',
    FiscalYear: '2026'
  })

  expect(result.supplierInvoice).toBe('5100000010')
  expect(result.companyCode).toBe('1000')
  expect(result.fiscalYear).toBe('2026')
})