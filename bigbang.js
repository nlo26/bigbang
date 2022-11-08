for( let i = 1; i <= 100; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log(i + ' BIG BANG')
  } else if (i % 3 === 0){
    console.log(i + ' BIG')
  } else if (i % 5 === 0){
    console.log(i + ' BANG')
  } else {
    console.log(i + ' ---')
  }
}
