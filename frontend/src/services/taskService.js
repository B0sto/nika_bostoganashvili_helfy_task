const url = "http://localhost:4000/api/tasks";

export const getTasks = async () => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export const deleteTask = async (id) => {
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE"
    })

    if (!response.ok) throw new Error("failed to delete task");

    return true;
}