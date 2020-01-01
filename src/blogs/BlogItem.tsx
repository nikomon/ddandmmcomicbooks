import React from 'react';
import ReactMarkdown from 'react-markdown';
 
export const BlogItem = (props: any) => {
  try {
    const { body } = require(`../content/posts/${props.match.params.slug}.json`);
    return <ReactMarkdown source={body}/>
    
  } catch(e) {
    console.log(e);
  }
  return (<div>Page not found</div>);
}