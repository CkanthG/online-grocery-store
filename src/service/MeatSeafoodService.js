const fetchMeatSeafoodData = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/meat-seafood');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log("data :;:" + data)
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export default fetchMeatSeafoodData;
