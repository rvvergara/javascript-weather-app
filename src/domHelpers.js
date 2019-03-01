const showData = (dataObj) => {
  // Assign dataObj elements in DOM
  const spans = [...document.getElementsByTagName("span")];
  const weather = [];

  Object.keys(dataObj).forEach(key => weather.push(dataObj[key]));

  weather.forEach((data, i) => {
    if (i === 0) {
      console.log(spans[i]);

      spans[i].innerHTML = `<img src="https://www.metaweather.com/static/img/weather/png/64/${data}.png" alt="${data}">`;

    } else if (i === 1) {
      spans[i].innerText = parseDate(data);
    } else {
      spans[i].innerText = data;
    }
  });
};

const parseDate = (date) => {
  const weatherDate = new Date(date);
  return `${weatherDate.toDateString()} ${weatherDate.getHours()}:${weatherDate.getMinutes()}`
};

export {
  showData,
};