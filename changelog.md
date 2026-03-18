## 4.0.0 - 2026-03-18
* The SDK now supports additional provider options: "sonora_quest" for appointment and lab providers, "apero" and "pverify" for payor code external providers, and "derived_readiness" for index column expressions. Internal optimizations improve schema validation performance.
* The `parserCreateJob` method now accepts an array of files instead of a single file. Update your code to pass files as an array: `parserCreateJob([file], request)` instead of `parserCreateJob(file, request)`.
* The SDK now supports additional optional parameters: `orderTransactionId` for filtering orders, `allowStale` for appointment availability caching, and `clinicalNotes` for order creation. Method signatures for `getMarkers()` and `getMarkersForLabTest()` have been updated with improved documentation. The `bookPscAppointment()` method now uses a structured request wrapper for better type safety.
* Breaking changes require code updates:
* The `jobId` property has been removed from the `ParsingJob` interface. Remove any references to this field.
* Several `ResultMetadata` properties are now optional: `patientFirstName`, `patientLastName`, `dob`, and `labName`. Add null checks when accessing these fields.
* The `UserInfo.address` field now uses `UserAddress` type instead of `Address`. Update your type references accordingly.
* New capabilities:
* New `CompendiumClient` provides `search()` and `convert()` methods for lab test lookups and conversions.
* Added `LabAccountClient` and `OrderTransactionClient` for expanded lab management functionality.
* The SDK now supports three new resource types: compendium for lab test search and conversion, lab account management for retrieving team lab accounts, and order transactions for tracking lab order processing and accessing results. New optional parameters have been added to existing lab test and appointment methods, including support for appointment notes and asynchronous booking confirmation.
* The SDK now includes compendium search functionality for lab test identifier lookup and conversion. New support for Samsung Health provider connections and derived readiness data columns in queries. Enhanced order management with transaction tracking and clinical notes support.
* The SDK now supports order transactions for grouping related orders with status tracking. New lab account management capabilities allow teams to configure billing, business units, and provider integrations. Added webhook events for lab report parsing job lifecycle (created/updated). Samsung Health is now available as a data provider. Enhanced appointment and order objects with additional optional fields for notes and transaction references.
* The SDK now supports compendium search functionality with new SearchCompendiumResponse type for finding biomarkers across canonical and lab-specific formats. Lab account management capabilities have been added with support for delegation flows and account status tracking. Enhanced address handling now includes access notes for delivery instructions.

