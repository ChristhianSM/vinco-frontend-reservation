const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
export const dayDifference = (date1, date2) => {
  const timeDiff = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());
  console.log(date1, date2);
  const diffDays = Math.ceil( timeDiff / MILISECONDS_PER_DAY );
  return diffDays;
}