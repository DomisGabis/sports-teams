
# Sports Teams

**Description:** React + Vite + TypeScript frontend for managing teams and players. 
The project uses `db.json` as a mock API during development via `json-server`.

**Requirements**

- **Node.js:** Installed (v16+ recommended).
- **npm / npx:** Included with Node.js.

**Installation**

- Clone the repository and install dependencies:

	`npm install`

**Running locally**

- Start the mock API (run this in a separate terminal):

	`npx json-server --watch db.json --port 3001`

	Or use the npm script defined in `package.json`:

	`npm run serve:db`

- Start the frontend development server (in another terminal):

	`npm run dev`

- After both are running:
	- API will be available at `http://localhost:3001` (resources come from `db.json`).
	- The frontend will run on Vite's port (for example `http://localhost:5173`).

**Scripts**

- `npm run dev`: starts the Vite development server.
- `npm run build`: builds the production bundle.
- `npm run preview`: preview the built app.
- `npm run serve:db`: starts `json-server` on port `3001` (same as `npx json-server --watch db.json --port 3001`).

**Project structure (high-level)**

- `src/` — React source code (components, pages, API wrappers, etc.).
- `db.json` — dataset used by `json-server` as a mock API.
- `public/` — static assets.

**Notes**

- Run both the API and the frontend concurrently in separate terminals so the app can communicate with the local API.
- If a port is already in use, change the `json-server` port or accept Vite's alternative port when prompted.
