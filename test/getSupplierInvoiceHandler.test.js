const { getSupplierInvoiceHandler } = require('../srv/utils/getSupplierInvoiceHandler')

test('returns supplier invoice data from handler', async () => {

  const mockRun = jest.fn().mockResolvedValue([
    {
      SupplierInvoice: '5100000010',
      CompanyCode: '1000'
    }
  ])

  const mockRemoteService = {
    run: mockRun
  }

  const result = await getSupplierInvoiceHandler(
    mockRemoteService,
    {
      SupplierInvoice: '5100000010',
      CompanyCode: '1000'
    }
  )

  expect(result[0].SupplierInvoice).toBe('5100000010')

  expect(mockRun).toHaveBeenCalled()
})

test('throws validation error for missing invoice', async () => {

  const mockRemoteService = {
    run: jest.fn()
  }

  await expect(
    getSupplierInvoiceHandler(
      mockRemoteService,
      {
        CompanyCode: '1000'
      }
    )
  ).rejects.toThrow('SupplierInvoice is required')
})