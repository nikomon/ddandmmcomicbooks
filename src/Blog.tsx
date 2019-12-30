import React from 'react';
import { Query, QueryState, QueryProps } from 'react-contentful';
import { IBlogPost } from '../@types/generated/contentful';
import ReactMarkdown from 'react-markdown';
import { Author } from './Author';
import { BlogContext } from './BlogContext';
 
interface Results {
  items: IBlogPost[]
}

export const Blog = (props: any) => ( 
  <BlogContext.Consumer>
        { 
        value => value ? value
        .find((val: any) => {
          console.log(val.slug, props.match.params.slug);
          
          return val.slug === props.match.params.slug
        })
        .map((item: any) => {
          console.log(item);
          
          return (
            <>
            <h1>{item.title}</h1>
            <ReactMarkdown source={item.body}/>
            {item.author ? <Author author={item.author}/> : null}
            </>
          );
        }) : null
        }
  </BlogContext.Consumer>  
);

{/* <Query
    contentType="blogPost"
    query={{ 'fields.slug[in]': `/${props.match.params.slug || ''}`, }}
  >
    {({data, error, fetched, loading}: { data: Results, error: string, fetched: any, loading: any}) => {
      if (loading || !fetched) {
        return null;
      }      
      if (error) {
        return null;
      }
 
      if (!data) {
        return <p>Page does not exist.</p>;
      }

      if (data.items.length > 0) {
        const { fields: { author, body, title } } = data.items[0];
        return (
        <div>
          <h1>{title}</h1>
          <ReactMarkdown source={body}/>
          {author ? <Author author={author}/> : null}
        </div>
        );
      }     
    }}
  </Query> */}