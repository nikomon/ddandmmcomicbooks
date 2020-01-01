import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Navigation } from './NavigationMenu';

export const App: React.FC = () => {

  return (
    
      <Container>
        <Router>
      <Navigation/>  
      </Router>
    </Container>
    );
}