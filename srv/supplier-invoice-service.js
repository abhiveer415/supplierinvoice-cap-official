const cds = require('@sap/cds')

function toEdmDateTime(value) {
  if (!value) return null

  if (typeof value !== 'string') return value

  if (value.includes('T')) return value

  return `${value}T00:00:00`
}

module.exports = cds.service.impl(async function () {
  const remote = await cds.connect.to('supplierinvoiceprocess')
  const { SupplierInvoices } = this.entities

  this.on('READ', SupplierInvoices, req => remote.run(req.query))

  this.on('CREATE', SupplierInvoices, async req => {
    const tx = remote.tx(req)

    const payload = {
      CompanyCode: req.data.CompanyCode,
      DocumentDate: toEdmDateTime(req.data.DocumentDate),
      PostingDate: toEdmDateTime(req.data.PostingDate),
      InvoicingParty: req.data.InvoicingParty,
      DocumentCurrency: req.data.DocumentCurrency,
      InvoiceGrossAmount: req.data.InvoiceGrossAmount,
      SupplierInvoiceIDByInvcgParty: req.data.SupplierInvoiceIDByInvcgParty,
      DocumentHeaderText: req.data.DocumentHeaderText,
      PaymentTerms: req.data.PaymentTerms
    }

    console.log('FINAL PAYLOAD:', JSON.stringify(payload, null, 2))

    return tx.run(
      INSERT.into('A_SupplierInvoice').entries(payload)
    )
  })
})