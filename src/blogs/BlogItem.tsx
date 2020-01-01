import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { navigationContext } from '../services/navigationContext';
 
export const BlogItem = (props: any) => {  
  const navigationItems = useContext(navigationContext);
  const blogItem = navigationItems.find(item => item.slug === `/${props.match.params.slug}`);
  
  if(blogItem) {
    const { body, id } = blogItem;
    return <ReactMarkdown key={id} source={body}/>
  }

  return (<div>Page not found</div>);
}