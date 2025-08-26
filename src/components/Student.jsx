import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const Student = ({student}) => {
  return (
     <Card sx={{ margin: 1 }}>
      <CardContent>
        <Typography data-testid="student-info">
          {student.name} - {student.grade}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Student