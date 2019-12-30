import React, { useState, useEffect } from 'react';
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
import { Footer } from './Footer';
import { NavMenu } from './NavMenu';
import { IBlogPost, IBlogPostFields } from '../@types/generated/contentful';
import { NotFound } from './NotFound';
import { BlogList } from './BlogList';
import { BlogContext } from './BlogContext';


const accessToken = 'mxp6BWi6hz_1OSGsq0GBuc6wFFLgo300KVfRG66OkUY';
const host = 'cdn.contentful.com';
const space = '43uruq1jkvc7';

interface MappedBlogContent {
  title: string;
  description: string;
  slog: string;
}

export const App: React.FC = () => {
  useEffect(() => {
    contentfulClient.getEntries<IBlogPostFields>({
      'content_type': 'blogPost'
    }).then(res  => {
      console.log(res);
      
      if(res && res.items.length > 0) {
        const { items } = res;
        const blogCards = items.map(({ fields: { title, description, slug } }) => {
          return {
            title,
            description,
            slug,
          }
        });
        setContent(items.map(({ fields }) => fields));
        setBlogContent(blogCards);
      }
    });
  }, [])
  const contentfulClient = ContentfulClient({
    accessToken,
    space,
  });
  const [content, setContent] = useState();
  const [blogContent, setBlogContent] = useState<any[]>();
  
  return (
    <ContentfulProvider client={contentfulClient}>
      <Container>
        <CardHeader title={'ddandmmcomicbooks'} subheader={'JORINOITA KERÄILYSTÄ JA KUVAMATERIAALIA AIHEESTA JA AIHEETTA'.toLocaleLowerCase()}/>
        <Router>
      <Switch>
        <Route path="/home/" render={() => <BlogContext.Provider value={blogContent}><BlogList/></BlogContext.Provider>} />
        <Route path="/blogs/:slug*" render={(props) => <BlogContext.Provider value={content}><Blog {...props}/></BlogContext.Provider>}/>
        <Route component={NotFound}/>
      </Switch>
      </Router>
        {/* <Footer/> */}
      </Container>
    </ContentfulProvider>
    );
}