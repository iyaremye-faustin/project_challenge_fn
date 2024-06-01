export const todayDate = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const date = daysOfWeek[currentDate.getDay()] + ' ' + month + ' ' + dayOfMonth + ' ' + year;
  return date;
};

export const todayCurrentLocalTime = () => {};
