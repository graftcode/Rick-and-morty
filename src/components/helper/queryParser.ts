export const queryParser = (url: string) => {
  const extractedParams = url.split("?")[1];

  const urlParams = new URLSearchParams(extractedParams);

  return Object.fromEntries(urlParams);
};
