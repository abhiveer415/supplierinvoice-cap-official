using { API_SUPPLIERINVOICE_PROCESS_SRV as ext }
  from './external/API_SUPPLIERINVOICE_PROCESS_SRV';

service SupplierInvoiceService {

  entity SupplierInvoices as projection on ext.A_SupplierInvoice {
    key SupplierInvoice,
    key FiscalYear,
    CompanyCode,
    DocumentDate,
    PostingDate,
    CreationDate,
    SupplierInvoiceIDByInvcgParty,
    InvoicingParty,
    DocumentCurrency,
    InvoiceGrossAmount,
    DocumentHeaderText,
    PaymentTerms,
    SupplierInvoiceStatus,
    SupplierInvoiceOrigin,
    InvoiceReceiptDate,
    AssignmentReference
  };

  entity SupplierInvoiceItems as projection on ext.A_SuplrInvcItemPurOrdRef {
    key SupplierInvoice,
    key FiscalYear,
    key SupplierInvoiceItem,
    PurchaseOrder,
    PurchaseOrderItem,
    Plant,
    ReferenceDocument,
    ReferenceDocumentFiscalYear,
    ReferenceDocumentItem,
    TaxCode,
    DocumentCurrency,
    SupplierInvoiceItemAmount,
    QuantityInPurchaseOrderUnit,
    QtyInPurchaseOrderPriceUnit,
    SupplierInvoiceItemText,
    FreightSupplier,
    PurchasingDocumentItemCategory,
    ProductType,
    RetentionAmountInDocCurrency,
    RetentionPercentage,
    RetentionDueDate,
    TaxCountry,
    TaxDeterminationDate,
    ReferenceDoc
  };

  entity SupplierInvoiceTax as projection on ext.A_SupplierInvoiceTax {
    key SupplierInvoice,
    key FiscalYear,
    key TaxCode,
    key SupplierInvoiceTaxCounter,
    DocumentCurrency,
    TaxAmount,
    TaxBaseAmountInTransCrcy,
    TaxJurisdiction,
    TaxCountry,
    TaxDeterminationDate,
    TaxRateValidityStartDate
  };

  entity SupplierInvoiceAdditionalData as projection on ext.A_SuplrInvoiceAdditionalData {
    key SupplierInvoice,
    key FiscalYear,
    InvoicingPartyName1,
    InvoicingPartyName2,
    CityName,
    Country,
    StreetAddressName,
    PostalCode,
    BankAccount,
    BankCountry,
    VATRegistration,
    LanguageCode,
    PaymentRecipient,
    BusinessType,
    IndustryType,
    FormOfAddressName,
    OneTimeBusinessPartnerEmail
  };

}