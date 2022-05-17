export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatDate = (str: string) => {
  const date = new Date(str);
  return `${getLastTwo(date?.getDate())} ${months[date?.getMonth()]}, ${date?.getFullYear()}, ${getLastTwo(
    date?.getHours()
  )}:${getLastTwo(date?.getMinutes())}:${getLastTwo(date?.getSeconds())}`;
};

export const getLastTwo = (str: string | number) => {
  return ('0000' + str).substr(-2, 2);
};
