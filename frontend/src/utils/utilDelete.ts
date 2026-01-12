const utilDelete = async (url: string, id: string): Promise<void> => {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete. Status: ${response.status}`);
  }
};
export default utilDelete;
