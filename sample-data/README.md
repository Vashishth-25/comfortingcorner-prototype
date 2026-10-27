# Sample data fixtures

These JSON files contain **synthetic demonstration data** intended for manual QA, examples, and future API design discussions. Names, credentials, IDs, availability, ratings, reviews, prices, notes, and bookings are not real listings or real appointments.

- `buddies.json` — one example peer-Buddy profile.
- `therapists.json` — one example therapist-shaped profile with explicitly fake credentials.
- `bookings.json` — examples of `confirmed`, `completed`, and `cancelled` booking states.

The running front end currently reads provider demo content from `js/data/mockData.js` and stores its current demo bookings in browser `localStorage`. These separate JSON fixtures are not wired into the UI automatically.

Do not replace these with personal health information. Before using real provider information, verify the data and obtain appropriate consent and permissions.
