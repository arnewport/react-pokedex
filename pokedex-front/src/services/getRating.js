export const getRating = async (id) => { 
    try {
        const URL = "http://localhost:8080/api/pokemon/rating/" + id;
    
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Request failed')
        }

        const rating = await response.text();
        return parseFloat(rating);

      } catch (error) {
        throw new Error('Fetch error: ' + error);
      }
}