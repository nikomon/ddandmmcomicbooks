import React from 'react';
import './App.css';
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
import { Blog } from './Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { CardHeader, Card, Container } from '@material-ui/core';


const accessToken = 'mxp6BWi6hz_1OSGsq0GBuc6wFFLgo300KVfRG66OkUY';
const host = 'cdn.contentful.com';
const space = '43uruq1jkvc7';

export const App: React.FC = () => {
  
  const contentfulClient = ContentfulClient({
    accessToken,
    space,
  });
  return (
    <ContentfulProvider client={contentfulClient}>
      <Container>
      <CardHeader title={'ddandmmcomicbooks'} subheader={'JORINOITA KERÄILYSTÄ JA KUVAMATERIAALIA AIHEESTA JA AIHEETTA'.toLocaleLowerCase()}/>
      <Router>
      <Switch>
        <Route path="/:slug*" component={Blog} />
      </Switch>
    </Router>
    </Container>
    </ContentfulProvider>
    );
}