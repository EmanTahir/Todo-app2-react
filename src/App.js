import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddTodoBox from './components/AddTodoBox';
import Todos from './components/Todos';

function App() {

  return (
    <>
      <Navbar title="Todo List Website" />
      <AddTodoBox />
      <Footer />
    </>
  );
}

export default App;
