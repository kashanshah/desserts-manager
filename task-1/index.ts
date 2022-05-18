export const fn = (str: string) => {
  return {
    fn: (newStr: string) => {
      if (!newStr) {
        return str;
      }
      return fn(str + ' ' + newStr);
    },
  };
};
