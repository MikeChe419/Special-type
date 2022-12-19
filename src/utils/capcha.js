const BASE_URL = "http://image.captchas.net";
const USERNAME = "grinrus";

// Генерация случайно строки для создания url запроса
const generateRandomString = () => {
  let text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 20; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

// Генерация URL для получения капчи
export const createCapchaLink = () => {
  const randomString = generateRandomString();
  const capchaUrl = `${BASE_URL}?client=${USERNAME}&random=${randomString}`;
  return capchaUrl;
};
