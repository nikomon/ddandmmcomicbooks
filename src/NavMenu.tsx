import { Query } from "react-contentful";
import { INavigation, IBlogPost } from "../@types/generated/contentful";
import React from "react";



export const NavMenu = () => (
    <Query
    include={1}
    id="4wdJ5X7Uza81nUmFvOdWoW">
    {({data, error, fetched, loading}: { data: INavigation, error: string, fetched: any, loading: any}) => {
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
console.log(data);

      if(data.fields.navigationItem) {
        
        // Process and pass in the loaded `data` necessary for your page or child components.
        return (
       null
        );
      }
      // See the Contentful query response
      return null;
    }}
    </Query>
);