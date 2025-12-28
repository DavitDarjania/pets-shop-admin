const utilUpdate = async (
  url: string,
  id: string,
  body:
    | {
        title: string;
        categorieId: string;
        price: string;
        description: string;
        isPopular: boolean;
        stackNum: number;
        img: string;
      }
    | {
        name: string;
        description: string;
      }
) => {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Failed to update. Status: ${response.status}`);
  }

  return response.json();
};
export default utilUpdate;
