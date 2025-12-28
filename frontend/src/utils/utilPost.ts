const utilPost = async (
  url: string,
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
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export default utilPost;
