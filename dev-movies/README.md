# 🎬 DevMovies

Web application developed with **ReactJS**, acting as a dynamic movie catalogue.  
Users can search for movies, explore movie details and interact with the movie list.

---

## 🚀 Features

✔️ Movie search by title  
✔️ Dynamic movie list display  
✔️ Detailed view for individual movies  
✔️ Responsive UI  
✔️ Integration with a movie API (TMDB or similar)

---

## 🛠️ Technologies

| Category | Tools |
|---------|-------|
| Framework | ReactJS |
| Routing | React Router DOM |
| HTTP Client | Axios |
| Styling | CSS / Styled-components (if used) |
| Build Tool | Vite or Create React App (depending on your setup) |

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Kaua-Vidal/Project-2---DevMovies.git
cd Project-2---DevMovies/dev-movies
```

### 2. Install dependencies
```
pnpm install
# or
npm install
# or
yarn install
```

### 3. Create Environment Variables
Create a .env file in the project root and add your Movie API key:
```
VITE_API_KEY=YOUR_TMDB_API_KEY
VITE_API_BASE_URL=https://api.themoviedb.org/3
```

### 🚀 Running the App

```
pnpm run dev
# or
npm run dev
# or
yarn dev
```
The app should open in your browser at ```http://localhost:3000.```

### 🧩 Project Structure
```
dev-movies/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

### 🔗 API Integration

This project consumes a third-party movie database API (such as TMDB) to fetch movie information, search results and details.
You must provide your own API key in the .env file.

### 🧾 License

This project is licensed under the ISC License.

### 👨‍💻 Author

Kauã Vidal
Built with ❤️ and ReactJS
