const btnElement = document.getElementById('btn');
const birthdayElement = document.getElementById('birthday');
const resultElement = document.getElementById('result');

function calculateAge(){
  const birthdayValue = birthdayElement.value;
  if(birthdayValue === ''){
    alert('Please enter a valid date.');
  } else {
    const age = getAge(birthdayValue);
    resultElement.innerText = `You are ${age} ${age > 1 ? 'years' : 'year'} old`;
  }
}

function getAge(birthdayValue){
  const birthdayDate = new Date(birthdayValue);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = currentDate.getMonth() - birthdayDate.getMonth();

  if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
    age--;
  }
  return age;
}

btnElement.addEventListener('click', calculateAge);