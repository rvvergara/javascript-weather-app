const weatherIcons = {

};

const showData = (dataObj) => {
  // Assign dataObj elements in DOM
  const spans = [...document.getElementsByTagName("span")];
  const weather = [];

  Object.keys(dataObj).forEach(key => weather.push(dataObj[key]));

  weather.forEach((data, i) => {
    spans[i].innerText = i === 1 ? parseDate(data) : data;
  });
};

const parseDate = (date) => {
  const weatherDate = new Date(date);
  return `${weatherDate.toDateString()} ${weatherDate.getHours()}:${weatherDate.getMinutes()}`
};

export {
  showData,
};