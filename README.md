# personal-portfolio

This repository hosts a modern and performant personal portfolio template, built with React and TypeScript. It is designed for developers and designers who want to showcase their projects, skills, and resume in an interactive and visually appealing manner, providing a solid foundation for a professional online presence.

---

## Features

*   **Dynamic Project Display**: Showcase your latest and experimental projects with dedicated cards and sections.
*   **Interactive Resume**: Present your professional experience with an option to download your resume as a PDF.
*   **Theme Toggling**: Seamlessly switch between dark and light modes for a personalized browsing experience.
*   **Smooth UI Animations**: Enhance user engagement with subtle and purposeful animations powered by Framer Motion.
*   **Client-Side Routing**: Navigate through different sections of the portfolio (e.g., About, Projects, Resume, Contact) with a fast and efficient routing system.
*   **Supabase Integration**: Ready for backend integration using Supabase, allowing for dynamic content management (e.g., fetching project data).
*   **Responsive Design**: Optimized for various devices and screen sizes.

---

## Tech Stack

*   **Framework**: React (with TypeScript)
*   **Routing**: TanStack Router
*   **UI/Animation**: Framer Motion
*   **Styling**: Tailwind CSS
*   **Icons**: Lucide React, React Icons
*   **Notifications**: Sonner
*   **Database/Backend-as-a-Service**: Supabase
*   **PDF Generation**: html2pdf.js
*   **Serverless/SSR Framework**: Nitro
*   **Build Tool**: Vite
*   **Development Tools**: TanStack Devtools, `@tanstack/react-devtools`, `@tanstack/react-router-devtools`

---

## Installation

To get a local copy up and running, follow these steps.

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/personal-portfolio.git
    cd personal-portfolio
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

---

## Usage

1.  **Start the development server**:

    ```bash
    npm run dev
    ```

    This will start the application in development mode, typically accessible at `http://localhost:5173`.

2.  **Build for production**:

    ```bash
    npm run build
    ```

    This command compiles the application into static files for production deployment.

3.  **Preview production build locally (if applicable via Nitro server)**:

    ```bash
    npm run start
    ```

    This runs the Nitro server, serving the production build.

---

## Project Structure

```
.
├── src/
│   ├── components/      # Reusable UI components (buttons, cards, header, footer, etc.)
│   ├── context/         # React Context providers (e.g., navigation, theme)
│   ├── lib/             # Utility functions and third-party library configurations (e.g., Supabase client)
│   ├── routes/          # Route definitions for TanStack Router (e.g., index, about, projects)
│   ├── services/        # Business logic, data fetching, and external API interactions (e.g., PDF download, project data)
│   ├── router.tsx       # Initializes TanStack Router
│   ├── routeTree.gen.ts # Generated route tree for TanStack Router
│   └── styles.css       # Global styles for the application
├── public/              # Static assets (images, fonts, etc.)
├── nitro.config.ts      # Configuration for Nitro, used for serverless functions or SSR
├── package.json         # Project metadata and dependency management
├── tsconfig.json        # TypeScript configuration
├── tsr.config.json      # TanStack Router configuration
└── vite.config.ts       # Vite build tool configuration
```

---

## Configuration

This project requires environment variables for Supabase integration and potentially other services. Create a `.env` file in the root directory and add the following:

| Variable            | Description                                   | Example Value                                  |
| :------------------ | :-------------------------------------------- | :--------------------------------------------- |
| `VITE_SUPABASE_URL` | The URL for your Supabase project.            | `https://xyzcompany.supabase.co`               |
| `VITE_SUPABASE_ANON_KEY` | The anonymous public key for your Supabase project. | `eyJhbGciOiJIUzI1NiIsIn...`                     |

*Note: Environment variables prefixed with `VITE_` are exposed to the browser by Vite.*

---

## Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a pull request.

---

## License

This project does not currently specify a license.