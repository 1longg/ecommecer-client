export const convertObjectParamToString = (obj: {[key: string]: string}) => {
  const keys = Object.keys(obj);
  const keyValuePairs = keys.map((key: string) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key] as string) ;
  });
  return keyValuePairs.join('&');
}