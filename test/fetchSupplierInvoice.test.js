const { fetchSupplierInvoice } = require('../srv/utils/fetchSupplierInvoice')

test('fetches supplier invoice from mocked backend', async () => {

  const mockRun = jest.fn().mockResolvedValue([
    {
      SupplierInvoice: '5100000010',
      CompanyCode: '1000'
    }
  ])

  const mockRemoteService = {
    run: mockRun
  }

  const result = await fetchSupplierInvoice(
    mockRemoteService,
    '5100000010'
  )

  expect(mockRun).toHaveBeenCalled()

  expect(result[0].SupplierInvoice).toBe('5100000010')

  expect(result[0].CompanyCode).toBe('1000')
})