const objPathParamsToStr = (objPathParams: object) => {
  return Object.entries(objPathParams).reduce(
    (acc, [key, value]) =>
      `${acc}&${key}=${Array.isArray(value) ? value.join() : value}`,
    "&"
  );
};

export const fetchTrello = (url: string, pathParams?: object) => {
  const strPathParams = pathParams ? objPathParamsToStr(pathParams) : "";
  return fetch(
    `${url}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}${strPathParams}`
  );
};
