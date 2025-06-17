import React, { useState } from 'react';

const UserCard = ({ name, quote }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.quote}>"{quote}"</p>
      <div style={styles.buttonGroup}>
        <button onClick={() => setLikes(likes + 1)} style={styles.button}>
          👍 {likes}
        </button>
        <button onClick={() => setDislikes(dislikes + 1)} style={styles.button}>
          👎 {dislikes}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#1f1f1f',
    color: '#f0f0f0',
    border: '1px solid #333',
    padding: '20px',
    borderRadius: '12px',
    maxWidth: '320px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.6)',
    margin: '20px auto',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  name: {
    marginBottom: '8px',
    fontSize: '22px',
    color: '#ffffff',
  },
  quote: {
    fontStyle: 'italic',
    color: '#ccc',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '16px',
  },
  button: {
    backgroundColor: '#333',
    color: '#f0f0f0',
    border: '1px solid #555',
    borderRadius: '6px',
    padding: '8px 14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default UserCard;
