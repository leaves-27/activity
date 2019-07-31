export const createSheetNames = ()=>{
  const arr  = [];
  for(let i = 1; i <= 12; i++ ){
    arr.push('P'+i);
  }
  return arr;
};

export const getPages = () => {
  const pages = {};
  const sheetNames = createSheetNames();
  sheetNames.forEach((item)=>{
    pages[item] = [];
  });
  return pages;
}
