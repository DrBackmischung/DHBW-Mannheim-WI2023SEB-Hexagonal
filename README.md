# DHBW-Mannheim-WI2023SEB-Hexagonal

**Node.js API** (läuft auf Port 3000)
- GET /products
- GET /products/:id
- POST /products
- PUT /products/:id
- DELETE /products/:id

**Python Product Service** (Port 3001)
- GET /products
- GET /products/:id
- POST /products
- PUT /products/:id
- DELETE /products/:id

**Architektur-Erklärung:**
- **Core** (Use Cases, Domain-Modelle): Enthält die zentrale Geschäftslogik (technologieunabhängig).
- **Ports**: Schnittstellen, die den Austausch zwischen Core und der Außenwelt definieren.
- **Adapters**: Implementierungen dieser Ports, um die Verbindung zu realen Systemen (Python-Service, Web-API) herzustellen.
- **Außenwelt**: Python-Produkt-Service, Datenbanken oder andere Services, die flexibel ausgetauscht werden können.
- Ergebnis: Flexible, leicht austauschbare Architektur, in der die zentrale Logik stabil bleibt.
