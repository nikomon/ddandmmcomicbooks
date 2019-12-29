import React from 'react';
import { Query, QueryState, QueryProps } from 'react-contentful';
import { IBlogPost } from '../@types/generated/contentful';
import ReactMarkdown from 'react-markdown';
import { Author } from './Author';
 
export const Blog = (props: any) => (  
  <Query
    contentType="Blog Post"
    id="3K9b0esdy0q0yGqgW2g6Ke"
  >
    {/* query={{
      'fields.slug[in]': `/${props.match.params.slug || 'homepage'}`,
    }} */}
    {({data, error, fetched, loading}: { data: IBlogPost, error: string, fetched: any, loading: any}) => {
      if (loading || !fetched) {
        return null;
      }
 
      if (error) {
        console.error(error);
        return null;
      }
 
      if (!data) {
        return <p>Page does not exist.</p>;
      }
 
      // See the Contentful query response
      console.log(data);
      console.log(props.match.params.slug);
      const { fields: { author, body } } = data;
      // Process and pass in the loaded `data` necessary for your page or child components.
      return (
      <div>
        {body ? <ReactMarkdown source={body}/> : null}
        {author ? <Author author={author}/> : null}
      </div>
      );
    }}
  </Query>
);