const url = "http://localhost:4000/api/tasks";

export const getTasks = async () => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}