# HubPay

HubPay is a portfolio-grade payment gateway built with .NET 10, Clean Architecture, and DDD-lite.

It demonstrates a realistic backend workflow for merchants, customers, payments, idempotency, and webhook eventing, plus an integrated web console for live operation demos.

## Current Status
- Backend API implemented and running
- Frontend operational console implemented (`wwwroot`)
- EF Core migration created and applied workflow documented
- Build and tests passing

## Core Capabilities
- Merchant onboarding and retrieval
- API key generation and merchant-scoped revocation
- Customer creation
- Payment creation with idempotency support
- Merchant-scoped payment lifecycle operations (`authorize`, `capture`, `refuse`, `cancel`)
- Payment event timeline retrieval
- Webhook registration, listing, and disable flow
- Centralized domain error handling with `application/problem+json`
- API key authentication via ASP.NET Core `AuthenticationHandler`

## Architecture
```text
src/
  HubPay.API
  HubPay.Application
  HubPay.Domain
  HubPay.Infrastructure

tests/
  HubPay.UnitTests
  HubPay.IntegrationTests
```

### Layer Responsibilities
- `Domain`: entities, value objects, enums, business rules, domain exceptions, repository contracts
- `Application`: use cases/services and DTO orchestration
- `Infrastructure`: EF Core, repository implementations, persistence configuration, migrations
- `API`: minimal endpoints, auth pipeline, middleware, static frontend hosting

## Domain Highlights
- Entities: `Merchant`, `ApiKey`, `Customer`, `Payment`, `PaymentEvent`, `Webhook`, `WebhookEvent`, `IdempotencyRecord`
- Value Objects: `Money`, `Email`, `Document`
- Payment transitions:
  - `Pending -> Authorized`
  - `Authorized -> Paid`
  - `Pending -> Refused`
  - `Pending -> Cancelled`
  - `Authorized -> Cancelled`
- Invalid transitions throw `DomainException`

## API Overview
### Merchants
- `POST /merchants`
- `GET /merchants`
- `GET /merchants/{id}`
- `POST /merchants/{id}/api-keys`
- `POST /merchants/{id}/api-keys/revoke`

### Customers
- `POST /customers`
- `GET /customers/{id}`

### Payments
- `POST /payments`
- `GET /payments`
- `GET /payments/{id}`
- `GET /payments/{id}/events`
- `POST /payments/{id}/authorize`
- `POST /payments/{id}/capture`
- `POST /payments/{id}/refuse`
- `POST /payments/{id}/cancel`

### Webhooks
- `POST /webhooks`
- `GET /webhooks`
- `POST /webhooks/{id}/disable`

## Security and Request Conventions
### Authentication
Use merchant API key as Bearer token:

```http
Authorization: Bearer sk_test_xxxxx
```

### Idempotency
Use `Idempotency-Key` when creating payments:

```http
Idempotency-Key: your-unique-key
```

If the same key is reused for the same merchant, HubPay returns the original response.

## Frontend Console
The project ships with a portfolio UI served by `HubPay.API` static files:
- `src/HubPay.API/wwwroot/index.html`
- `src/HubPay.API/wwwroot/styles.css`
- `src/HubPay.API/wwwroot/app.js`

It supports end-to-end flows for merchants, customers, payments, events, and webhooks.

## Local Setup
1. Configure DB connection string (`HubPayDatabase`) in `src/HubPay.API/appsettings.*.json` or environment variables.
2. Restore tools and packages:
   - `dotnet tool restore`
   - `dotnet restore`
3. Apply migrations:
   - `dotnet tool run dotnet-ef database update --project src/HubPay.Infrastructure --startup-project src/HubPay.API`
4. Run API + frontend console:
   - `dotnet run --project src/HubPay.API`
5. Open the API URL in browser (console is served from `/`).

## Build and Test
- `dotnet build HubPay.slnx`
- `dotnet test HubPay.slnx`

## Tooling Notes
- Local EF tooling is tracked via `dotnet-tools.json`
- Migration baseline includes `NormalizeDocumentValueObject`

## Documentation
- Rules and coding guidelines: `docs/rules.md`
- Project memory/state: `docs/memory.md`

## Roadmap (Short)
- API request validation hardening
- Pagination/filtering for list endpoints
- Expanded tests for transitions/idempotency/webhooks
- Background webhook delivery with retries
- Structured observability and rate limiting