import React, { useEffect, useState } from 'react';

function ProfilePageUI() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    fetch(`https://dummyjson.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      <h2>Profile Page</h2>
      <div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.password}</p>
      </div>
    </div>
  );
}

export default ProfilePageUI;
