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
        url: `https://blinkmotors.herokuapp.com/user/${email}`,
        headers: {
          'content-type': 'application/json',
        },
        data: currentUser,
      }).then((res) => {
        // console.log('data inside useToken', data);
        const accessToken = res.data.token;
        localStorage.setItem('accessToken', accessToken);
        setToken(accessToken);
      });
    }
  }, [user]);
  return [token];
};
export default useToken;
