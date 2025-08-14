import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookStorePage from './toviassole/pages/BookStorePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bookstore" element={<BookStorePage />} />
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100">
              <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Art by Tovias</h1>
              <p className="text-lg text-gray-700 mb-6">Where creativity meets culture.</p>
              <Link
                to="/bookstore"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Visit Book Store
              </Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
