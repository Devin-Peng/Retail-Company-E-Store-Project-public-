const API_URL = "http://98.92.104.141:8080/api/books";

export const fetchAllBooks = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
}