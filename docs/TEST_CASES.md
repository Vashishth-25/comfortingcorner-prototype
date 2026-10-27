# Manual Test Cases — Comforting Corner Prototype

These are proposed manual QA scenarios for the current prototype. **They have not been run automatically.** Mark the result only after executing the scenario in a browser.

## Test environment

- Browser: current Chrome, Edge, Firefox, or Safari.
- Run from the project folder with `node server.js` or `npm start`.
- Open `http://localhost:8000` unless `PORT` was changed.
- Use a fresh browser profile or clear site storage for first-load checks.
- Internet access is required for CDN dependencies and remote images/fonts.

## Cases

| ID | Area | Preconditions | Steps | Expected result | Priority | Result |
|---|---|---|---|---|---|---|
| CC-001 | Initial load | Server is running; internet available. | Open the root URL. | Landing page renders in the browser; no blank page or unresolved module error. | P1 | Not run |
| CC-002 | Buddy browsing | App loaded. | Enter the Buddy view from the landing page and browse the cards. | Buddy cards and their sample details render. | P1 | Not run |
| CC-003 | Therapist browsing | App loaded. | Open therapist mode. | Therapist cards display sample specializations, pricing, and availability. | P1 | Not run |
| CC-004 | Search | Buddy or therapist listing displayed. | Enter a term matching a visible name/topic; then enter a term that should not match. | Results are filtered according to the UI's current search behavior; a no-match state is handled without a crash. | P1 | Not run |
| CC-005 | Profile details | At least one provider card is visible. | Select a provider card; close its profile modal. | Correct profile details open; close action returns to the previous listing. | P1 | Not run |
| CC-006 | Save/unsave provider | Provider listing displayed. | Toggle the save/favourite control, open saved items, remove the item. | Saved list and saved count update; removed provider no longer appears in saved items. | P1 | Not run |
| CC-007 | Saved persistence | A provider has been saved. | Refresh the page and inspect saved items. | Saved provider IDs persist in the same browser profile. | P2 | Not run |
| CC-008 | Onboarding | Fresh or logged-out demo state. | Start support, complete the visible onboarding flow with demo values. | Dashboard opens according to the UI's demo state. No server account is created. | P1 | Not run |
| CC-009 | Schedule flow | Provider profile/listing available. | Open scheduling, choose the available demo options, confirm. | A new demo booking appears in the app's sessions list and is saved locally. No payment is requested/processed. | P1 | Not run |
| CC-010 | Required-field validation | Scheduling flow open. | Attempt to confirm with a required field missing (where the UI permits this). | Confirmation is blocked or the field is clearly surfaced as required; app does not crash. | P1 | Not run |
| CC-011 | Sessions dashboard | At least one confirmed booking exists. | Open sessions; switch between Upcoming, Completed, and Cancelled tabs. | Bookings are grouped by their current status; empty states render when a category has no items. | P1 | Not run |
| CC-012 | Cancel a booking | At least one confirmed booking exists. | Cancel it in the sessions dashboard. | Booking status changes to cancelled and it appears under Cancelled, not Upcoming. | P1 | Not run |
| CC-013 | Video screen disclaimer | At least one confirmed demo booking exists. | Choose the join-video action. | A video-session UI appears. Confirm that this is only a mock screen and no real media connection is established. | P1 | Not run |
| CC-014 | Buddy chat | Buddy profile/listing available. | Open Buddy chat and send or select a sample prompt. | Simulated local response UI works; no request to an AI/chat backend is expected. | P1 | Not run |
| CC-015 | Support resources | App loaded. | Open the urgent lifeline/support-resource modal; inspect listed items and click/activate an external or telephone link only if appropriate. | Resource information and links are visible. Verify all contact details independently before any real deployment. | P1 | Not run |
| CC-016 | Theme persistence | App loaded. | Toggle light/dark theme, refresh. | Chosen theme is applied and persists in the same browser profile. | P2 | Not run |
| CC-017 | Language preference | App loaded. | Switch English/Hindi, navigate between the major views, refresh. | Relevant interface labels change where translated and preference persists. Note any untranslated regions as defects. | P2 | Not run |
| CC-018 | CC Points modal | App loaded. | Open and close the CC Points modal using available entry points. | Modal opens and closes without obscuring the page after dismissal. | P2 | Not run |
| CC-019 | Corrupt storage fallback | Test profile; no user data to preserve. | In DevTools, set `cc_saved_ids` to invalid JSON, reload; repeat for `cc_bookings_inr` and `cc_session`. | App handles invalid stored JSON using its fallback behavior rather than crashing. Restore/clear test data after the check. | P2 | Not run |
| CC-020 | Responsive layout | App loaded. | Inspect at desktop width and narrow mobile width; open and close a modal at each width. | Main UI remains usable without critical controls being inaccessible or content causing a fatal layout failure. | P1 | Not run |
| CC-021 | Server missing path | Server is running. | Request a non-existent path such as `/not-a-real-file.js`. | Server returns a 404 response. | P2 | Not run |
| CC-022 | Server path containment | Server is running. | Try a URL attempting to address a file outside the served root, without changing any system files. | Server refuses the request rather than serving an outside file. | P2 | Not run |
| CC-023 | Clean startup | Clear site data in a test profile. | Reload landing page, move to the dashboard, inspect initial demo content. | Application initializes with its documented demo defaults. Do not assume the seeded booking is a real appointment. | P2 | Not run |
| CC-024 | Public-repo secret scan | Before pushing publicly. | Review tracked files and run a secret scan; search for API keys, tokens, `.env` files, and real user data. | No private credentials or sensitive real-world data are committed. | P1 | Not run |
| CC-025 | Static deployment | Published static site exists. | Open the published URL in a private browser window with network access. | Page loads under repository subpath; module/CSS/CDN requests succeed. | P1 | Not run |

## Suggested regression pass

After changing application behavior, re-run CC-001, CC-004, CC-006, CC-009, CC-011, CC-012, CC-016, CC-017, and CC-020 at minimum. After changing deployment or import paths, also re-run CC-001, CC-021, CC-022, and CC-025.

## Defect report template

```text
Test ID:
Date / tester:
Browser and version:
Environment (local or deployed URL):
Steps performed:
Expected result:
Actual result:
Severity (critical / high / medium / low):
Screenshot or console output:
```

## Important test boundary

Passing these manual UI checks does not verify clinical suitability, the accuracy of provider credentials, the availability of support services, data protection compliance, or production security. Those require separate expert review and real backend testing.
