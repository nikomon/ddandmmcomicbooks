import React from 'react';
import { BlogItem } from './BlogItem';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { BlogContext } from './BlogContext';

interface BlogContent {
    title: string;
    description: string;
    slug: string;
}

export const BlogList = () => (
    <BlogContext.Consumer>
        {
        value => value?.map(val => <BlogItem item={val}/>)
        }
    </BlogContext.Consumer>    
)