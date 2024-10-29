export const getSpotifyToken = async () => {
    const client_id = '1cc098e6dbf94a3584082f5046b947f2';
    const client_secret = '873020b0be3e400690e57903e8e02953';
    const credentials = btoa(`${client_id}:${client_secret}`);
    
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${credentials}`,
      },
      body: 'grant_type=client_credentials',
    });
    
    const data = await response.json();
    return data.access_token;
  };