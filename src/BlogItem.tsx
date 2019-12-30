import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface Props {
    item: any;
}

export const BlogItem: React.FC<Props> = ({ item }) => {
    console.log(item);
    
    return (
        <Card>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>
            { item.title }
            </Typography>
            <Typography color="textSecondary">
            { item.description }
            </Typography>
            </CardContent>
            <CardActions>
                
            <Link to={`/blogs/${item.slug}`}><Button size="small">Learn More</Button></Link>
            </CardActions>
        </Card>
    )
 }