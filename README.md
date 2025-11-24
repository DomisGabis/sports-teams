
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


## Task description
In this project, you will develop a React.js TypeScript application using Vite to serve as a user interface for managing and viewing sports teams. The UI will consist of several components, including a `Menu` for displaying the team’s name, a `Body` for displaying team data and players, a `Player` component for showing individual player details, and conditional components like `Warning` (which alerts the user if there are fewer than 11 players) and `Info` (which confirms when there are 11 or more players), as well as a `Footer` component.

You will style the components using CSS, ensuring that the footer stays at the bottom of the page, the menu remains at the top, and players are styled appropriately. You will pass the team and player data through `props` between components, while maintaining the list of players in the component’s `state`. You will also implement routing with `react-router` to allow navigation between different teams. The app will include a `TeamList` component as the main page, containing links to view the details of each team. Additionally, you will add forms for creating new players and teams, and dynamically update the player count using the `useEffect` hook.

In the final phase, you will integrate REST API functionality by replacing static data with dynamic data fetched using `Axios`. You will set up a mock REST API using `json-server` to simulate the backend. This API will support GET requests to fetch data for teams and players, as well as POST requests to add new players and teams.

Ensure that the application correctly communicates with the REST API, and that all features such as viewing, adding, and updating data are functioning. The final deliverable will be a fully functional React application with REST API integration, ready for deployment.