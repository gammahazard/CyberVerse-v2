// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Modal, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/admin.module.css';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newsItems, setNewsItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_NEWS_API_URL;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      fetchNewsItems();
    }
  }, []);

  const fetchNewsItems = async () => {
    try {
      const response = await fetch(`${API_URL}/news`);
      if (response.ok) {
        const data = await response.json();
        setNewsItems(data);
      } else {
        console.error('Failed to fetch news items');
      }
    } catch (error) {
      console.error('Error fetching news items:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        fetchNewsItems();
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const handleAddNews = () => {
    setSelectedItem(null);
    setIsModalOpen(true);
  };

  const handleEditNews = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleDeleteNews = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/news/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      });
      if (response.ok) {
        fetchNewsItems();
      } else {
        alert('Failed to delete news item');
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const handleSaveNews = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newsData = Object.fromEntries(formData.entries());

    try {
      const url = selectedItem
        ? `${API_URL}/news/${selectedItem.id}`
        : `${API_URL}/news`;
      const method = selectedItem ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(newsData),
      });

      if (response.ok) {
        setIsModalOpen(false);
        fetchNewsItems();
      } else {
        alert('Failed to save news item');
      }
    } catch (error) {
      console.error('Save error:', error);
    }
  };

  if (!isLoggedIn) {
    return (
      <Box className={styles.container}>
        <Typography variant="h4" className={styles.header}>
          Admin Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} className={styles.loginForm}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{ className: styles.textFieldInput }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{ className: styles.textFieldInput }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={`${styles.button} ${styles.buttonHover}`}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={styles.container}>
      <Typography variant="h4" className={styles.header}>
        News Admin Panel
      </Typography>
      <Button onClick={handleAddNews} variant="contained" className={`${styles.button} ${styles.buttonHover}`} sx={{ mb: 2 }}>
        Add News Item
      </Button>
      <List>
        {newsItems.map((item) => (
          <ListItem key={item.id} className={`${styles.listItem} ${styles.listItemHover}`}>
            <ListItemText primary={item.title} secondary={item.datePublished} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleEditNews(item)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteNews(item.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Button onClick={handleLogout} variant="outlined" className={`${styles.button} ${styles.buttonHover}`} sx={{ mt: 2 }}>
        Logout
      </Button>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box className={styles.modal}>
          <Typography variant="h6" component="h2" className={styles.modalTitle}>
            {selectedItem ? 'Edit News Item' : 'Add News Item'}
          </Typography>
          <Box component="form" onSubmit={handleSaveNews}>
            <TextField
              fullWidth
              margin="normal"
              name="title"
              label="Title"
              defaultValue={selectedItem?.title || ''}
              InputLabelProps={{ className: styles.textFieldLabel }}
              InputProps={{ className: styles.textFieldInput }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="content"
              label="Content"
              multiline
              rows={4}
              defaultValue={selectedItem?.content || ''}
              InputLabelProps={{ className: styles.textFieldLabel }}
              InputProps={{ className: styles.textFieldInput }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="imageUrl"
              label="Image URL"
              defaultValue={selectedItem?.imageUrl || ''}
              InputLabelProps={{ className: styles.textFieldLabel }}
              InputProps={{ className: styles.textFieldInput }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="tweetId"
              label="Tweet ID"
              defaultValue={selectedItem?.tweetId || ''}
              InputLabelProps={{ className: styles.textFieldLabel }}
              InputProps={{ className: styles.textFieldInput }}
            />
            <Button type="submit" variant="contained" className={`${styles.button} ${styles.buttonHover}`}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminPage;