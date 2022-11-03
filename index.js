


const writtenCards = [];
function writeCards(names, event){
  for(let counter = 1; counter <= names.length -1; counter+=1){
    writtenCards.push(`Thank you, ${names[counter]}, for the wonderful ${event} gift!`);
    
    
  }
  return writtenCards;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(num){
  for(num; num>= 0; num--){
    console.log(num);
  }
}
countDown(11);