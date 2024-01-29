/**
 * string 에서 숫자만 추출한다.
 */

export const extractNumber = (str: string) => {
  const numbers = str.match(/\d+/g);

  return numbers ? numbers.join('') : '';
}
