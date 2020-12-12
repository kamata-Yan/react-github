import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CommentsPage from './CommentsPage/CommentsPage';
import './Content.css'
import HomePage from './HomePage/HomePage';
import ImagesPage from './ImagesPage/ImagesPage';
import MusicPage from './MusicPage/MusicPage';
import PortfolioPage from './PortfolioPage/PortfolioPage';


function Content() {
    return (
      <div className="Content">
        <h1>Content</h1>
        <Switch>
          <Route path='/HomePage'> <HomePage /> </Route>      
          <Route path='/ImagesPage'> <ImagesPage /> </Route>
          <Route path='/MusicPage'> <MusicPage /> </Route>
          <Route path='/CommentsPage'> <CommentsPage /> </Route>
          <Route path='/PortfolioPage'> <PortfolioPage /> </Route>
        </Switch>
      </div>
    );
  }

export default Content;