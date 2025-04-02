const BASE_URL = 'http://localhost:5000'; // Update this to match your backend's base URL

export const get = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`); // Use BASE_URL
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export const post = async (url, data) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, { // Use BASE_URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ensure JSON content type
      },
      body: JSON.stringify(data), // Convert data to JSON string
    });

    const result = await response.json();
    return { ok: response.ok, ...result }; // Include `ok` status in the response
  } catch (error) {
    console.error('Request error:', error); // Log any request errors
    throw error;
  }
};
