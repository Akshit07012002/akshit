import { useState } from 'react'
import './App.css'
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from './components/ErrorBoundary/index.js';

function App() {

  return (
    <ErrorBoundary>
      <HashRouter>
        <Route path="/" component={Home} />
        <Route path="/sidebar" component={Sidebar} />
      </HashRouter>
    </ErrorBoundary>
  )
}

export default App
