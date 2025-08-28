import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Student = ({ student }) => {
  const [Status, setStatus] = useState('');

  const handleStatus = () => {
    setStatus('Present');
  };

  return (
    <Card sx={{ margin: 1 }}>
      <CardContent>
        <Typography>
          {student.name} - {student.grade}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Attendance Status: {Status || 'Absent'}
        </Typography>
<<<<<<< HEAD
        <Button
          variant="contained"
          onClick={handleStatus}
=======
        <Button 
          variant="contained" 
          onClick={handleStatus} 
>>>>>>> d4d00d9ba8a5303de6517dafbe2750569b1fc6c9
          disabled={Status === 'Present'}
          sx={{ mt: 2 }}
        >
          Mark as Present
        </Button>
      </CardContent>
    </Card>
  );
};

export default Student;
