const { validateSupplierInvoice } = require('../srv/utils/validateSupplierInvoice')

test('passes validation for valid payload', () => {

  const result = validateSupplierInvoice({
    SupplierInvoice: '5100000010',
    CompanyCode: '1000'
  })

  expect(result).toBe(true)
})

test('throws error when SupplierInvoice is missing', () => {

  expect(() => {
    validateSupplierInvoice({
      CompanyCode: '1000'
    })
  }).toThrow('SupplierInvoice is required')
})

test('throws error when CompanyCode is missing', () => {

  expect(() => {
    validateSupplierInvoice({
      SupplierInvoice: '5100000010'
    })
  }).toThrow('CompanyCode is required')
})