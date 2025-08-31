# 📚 Globalbookstore

## 📖 About
**Book Finder** is a React application that allows users to search for books using the **Open Library API**.  
It is designed for our user persona **Alex (a college student)** who wants a simple and responsive way to discover books by title.  

The app includes features like **debounced search, pagination, error handling, and clean UI with Tailwind CSS**.

---

## ✨ Features
- 🔍 **Search Books** by title (with debounce to reduce API calls).
- 📘 Displays **book cover, title, author, edition count, and first publish year**.
- 📄 **Pagination** (20 books per page).
- ⚡ **Loading spinner** while fetching data.
- 🚫 **Error Handling**: Shows a friendly "No Books Found" screen if no results.
- 🎨 **Responsive Design**: Works on desktop and mobile.
- 🪶 **Tailwind + Flowbite Components** for modern UI.

---

## 🛠 Tech Stack
- **React** (Frontend library)
- **Axios** (for API requests)
- **Tailwind CSS** (for styling)
- **Flowbite** (prebuilt UI components)
- **Open Library API** (https://openlibrary.org/search.json)

---

## 📂 Project Structure

src/
├── App.jsx # Main app with search + debounce logic
├── Components/
│ └── BookCard.jsx # Card UI for each book
│ └── Header.jsx # Search bar header
├── Pages/
│ └── Books.jsx # Fetch books + pagination + error handling
├── hook/
│ └── useDebounce.js # Custom debounce hook
└── App.css # Styling 


---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/zakienam/BookStore
cd book-finder


🌍 Deployment

The app is deployed here 👉 https://globalbookstore.netlify.app/
