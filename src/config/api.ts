/**
 * @param url The URL from which to fetch data.
 * @returns A promise resolving to the fetched JSON data.
 */
export const fetchData = async <T>(url: string, signal: AbortSignal): Promise<T> => {
    try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error("Fetching data failed:", error);
        throw error;
    }
}
