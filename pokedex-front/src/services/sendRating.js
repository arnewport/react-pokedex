export const sendRating = async (id, rating) => {
    try {
      const URL = "http://localhost:8080/api/pokemon/add";
      const data = {
        id: id,
        rating: rating,
      };
  
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        });
  
      if (!response.ok) {
        throw new Error('Request failed')
      }
    } catch (error) {
      throw new Error('Fetch error: ' + error);
    }
  };
  