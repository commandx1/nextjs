export const dateFixer = (createdAt) => {
  let dayFormat = new Date(createdAt).getDate();
  let monthFormat = new Date(createdAt).getMonth();
  const yearFormat = new Date(createdAt).getFullYear();

  dayFormat = dayFormat > 9 ? dayFormat : "0" + dayFormat;
  monthFormat = monthFormat > 9 ? monthFormat : "0" + monthFormat;

  return dayFormat + "." + monthFormat + "." + yearFormat;
};
