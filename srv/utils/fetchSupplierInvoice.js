async function fetchSupplierInvoice(remoteService, invoiceId) {
  const response = await remoteService.run({
    SELECT: {
      from: 'A_SupplierInvoice',
      where: {
        SupplierInvoice: invoiceId
      }
    }
  })

  return response
}

module.exports = { fetchSupplierInvoice }