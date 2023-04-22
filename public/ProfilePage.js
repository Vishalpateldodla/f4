import React, { useEffect, useState } from 'react';

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    fetch(`https://dummyjson.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
      });
  }, []);

  return (
    <div>
      <h2>Profile Page</h2>
      {user ? (
        <div>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProfilePage;
