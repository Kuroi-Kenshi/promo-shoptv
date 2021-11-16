export const getData = async telNumber => {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `http://apilayer.net/api/validate?access_key=85b00c75c027720450d2e7659659bee8&number=${telNumber}&country_code=RU`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res.status);
  }

  const data = await res.json();
  return data;
};
