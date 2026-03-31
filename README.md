# website-
=
# Shri Swaroop Public Sen. Sec. School Website

This project is a modern, responsive school website built with React, Tailwind CSS, and Framer Motion.

## How to Run the Project

There are two ways to run this project, depending on your preference:

### Option 1: Full React Setup (Recommended for Development)

This option uses the full React and Vite setup, providing a professional development environment.

1.  **Open the project folder** in VS Code.
2.  **Open the terminal** in VS Code (Terminal -> New Terminal).
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start the development server**:
    ```bash
    npm run dev
    ```
5.  **Open the link** provided in the terminal (usually `http://localhost:3000`).

### Option 2: Single-File Setup (Perfect for "Go Live" & Simple Hosting)

This option uses the `index.html` file, which contains everything in a single file and doesn't require any installation.

1.  **Open the project folder** in VS Code.
2.  **Right-click on `index.html`** and select **"Open with Live Server"** (requires the "Live Server" extension).
3.  **This file is ready for hosting** on GitHub Pages or other simple static hosts.

## How to Deploy to GitHub

### GitHub Pages (Simple Method)

1.  **Ensure `index.html` is in the root folder**.
2.  **Create a new repository** on GitHub.
3.  **Upload the `index.html` file** to the repository.
4.  **Go to Settings -> Pages** in your GitHub repository.
5.  **Select the "main" branch** and the root folder, then click **Save**.
6.  Your site will be live at `https://yourusername.github.io/your-repo-name/`.

### GitHub Pages (Professional Method)

If you want to deploy the full React app:

1.  **Push the entire project** to a GitHub repository.
2.  **Set up a GitHub Action** to build and deploy the project automatically.
3.  Alternatively, run `npm run build` locally and upload the contents of the `dist/` folder to your repository.

## Configuration

You can easily customize the website by editing the variables at the top of `src/App.tsx` or `index.html`:

*   `WHATSAPP_NUMBER`: Your WhatsApp contact number.
*   `LOGO_URL`: The URL for your school logo.
*   `FACEBOOK_URL`, `INSTAGRAM_URL`, etc.: Your social media profile links.
*   `MAP_EMBED_URL`: The Google Maps embed URL for your location.

---

Built with ❤️ for Shri Swaroop Public Sen. Sec. School.
