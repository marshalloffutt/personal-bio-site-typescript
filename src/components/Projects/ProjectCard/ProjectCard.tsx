import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ProjectCard.scss';

export default function ProjectCard(project: any) {
  return (
    <Card className="card" sx={{ maxWidth: 460 }}>
      <CardMedia
        component="img"
        height="200"
        image={project.data.imageUrl}
        alt={project.data.name}
      />
      <CardContent>
        <h2>{project.data.name}</h2>
        <Typography variant="body2" color="text.secondary">
          {project.data.description}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <b>Technologies used:</b> {project.data.technologies}
        </Typography>
      </CardContent>
      <CardActions className="card-links">
        <Button target="_blank" href={project.data.githubUrl} size="small">
          View on GitHub
        </Button>
        {project.data.url && (
          <Button target="_blank" href={project.data.url} size="small">
            View Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
