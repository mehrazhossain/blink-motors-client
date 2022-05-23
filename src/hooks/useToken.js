import axios from 'axios';
import { useState, useEffect } from 'react';

const useToken = (user) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      axios({
        method: 'PUT',
        url: `http://localhost:5000/user/${email}`,
        headers: {
          'content-type': 'application/json',
        },
        data: currentUser,
      }).then((data) => {
        console.log('data inside useToken', data);
      });
    }
  }, [user]);
  return [token];
};
export default useToken;
