import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Chatbot from './components/Chatbot';
import Dashboard from './components/Dashboard';
import RecentChat from './components/RecentChat';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/chat" replace />} />
            <Route path="/chat" element={<Chatbot />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recent-chat" element={<RecentChat />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
