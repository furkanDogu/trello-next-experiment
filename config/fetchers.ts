export const fetchTrello = (url: string, pathParams?: string) => {
  return fetch(
    `${url}?key=${process.env.TRELLO_API_KEY}&token=${
      process.env.TRELLO_API_TOKEN
    }${pathParams || ""}`
  );
};
