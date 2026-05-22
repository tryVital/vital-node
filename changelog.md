## 4.0.0 - 2026-03-18
* New appointment provider support for Sonora Quest, plus additional insurance verification providers "apero" and "pverify" available in the PayorCodeExternalProvider enum.
* The lab report parser now accepts multiple files in a single job. The `parserCreateJob` method parameter has changed from `core.file.Uploadable` to `core.file.Uploadable[]`. Update your calls to pass an array of files instead of a single file.
* New query parameters added to lab test methods: `orderTransactionId` for filtering orders, `labSlug` for marker queries, and `allowStale` for cached appointment availability. The `bookPscAppointment` method now accepts a structured request object with idempotency support.
* The `UserInfoCreateRequest.address` field now uses the `UserAddress` type instead of `Address`. Existing code using this interface may need to be updated to match the new type definition.
* **Breaking Changes:**
* The `ParsingJob` interface has removed the required `jobId` field and added an optional `failureReason` field. Update any code that accesses `parsingJob.jobId`.
* The `ResultMetadata` interface has changed several required fields (`patientFirstName`, `patientLastName`, `dob`, `labName`) to optional. Add null checks when accessing these properties.
**New Features:**
* New `CompendiumClient` available with `search()` and `convert()` methods for working with medical test compendium data
* Added support for new lab providers: `sonora_quest` and `crl`
* Added support for Samsung Health as a manual provider
* Enhanced `ResultMetadata` with optional `gender` field
* The SDK now supports compendium search and conversion, lab account management, and order transaction tracking. New CompendiumClient provides methods to search lab test data and convert between lab providers. LabAccountClient enables viewing team lab account configurations. OrderTransactionClient allows tracking order transactions and retrieving results.
* The SDK now supports compendium search and conversion for lab test discovery, order transaction management with status tracking, and team lab account management with delegated workflow support. New derived readiness data querying capabilities are available, along with Samsung Health provider support and enhanced appointment booking with access notes.
* The SDK now supports lab account management with new `ClientFacingLabAccount` types, order transaction tracking through `ClientFacingOrderTransaction` objects, and Samsung Health as a new data provider. Additionally, compendium search functionality is now available for lab test management, and new webhook events have been added for lab report parsing jobs.
* The SDK now supports biomarker compendium search with new SearchCompendiumResponse type, lab order transaction tracking with OrderTransaction and OrderSummary types, and enhanced address handling with access notes support. New DerivedReadinessColumnExpr enables querying derived readiness metrics.

