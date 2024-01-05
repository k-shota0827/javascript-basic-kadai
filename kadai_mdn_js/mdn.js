const today = new Date();

const date1 = () => {
  console.log(today.getFullYear() + '年');
  console.log(today.getMonth() + 1 + '月');
  console.log(today.getDay() + '日');
}

date1();