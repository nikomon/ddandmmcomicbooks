import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core"
import React from "react"


export const Author: React.FC = () => {
    return (
       
        <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {/* { fields.name } */}
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          {/* { fields.shortBio } */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> 
    // : <p>No author</p>
    )
    
}