# SAP CAP Supplier Invoice Service

## 🚀 Overview
This project is an SAP CAP (Cloud Application Programming Model) service that integrates with an S/4HANA system to retrieve Supplier Invoice data via an OData API.

It demonstrates how to build a CAP-based backend service that connects to external SAP systems using Destination and Connectivity services on SAP BTP.

---

## 🧱 Architecture

Client (Postman / UI)
↓
SAP CAP Service (Node.js)
↓
Destination Service (SAP BTP)
↓
Connectivity Service
↓
SAP Cloud Connector
↓
S/4HANA OData API

---

## 🛠️ Technologies Used

- SAP CAP (Node.js)
- SAP BTP (Cloud Foundry)
- Destination Service
- Connectivity Service
- Cloud Connector
- XSUAA (OAuth2 Authentication)
- OData V2
- Postman

---

## 🔌 Backend Integration

- Integrated with an external OData service (Supplier Invoice API)
- Imported metadata (EDMX) and generated CAP external model using:
  ```bash
  cds import <metadata>.edmx