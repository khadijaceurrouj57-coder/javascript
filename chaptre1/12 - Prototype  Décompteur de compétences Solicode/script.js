let competence = ["c1","c3","c2","c1","c3","c8","c2","c1"];
  let competeur ={};
  for (let i=0; i<competence.length; i++) {
    let code=competence[i];
    if(competeur[code] === undefined){
      competeur[code]=1;
    }else{
      competeur[code]++;
    }
  }
  console.log(competeur)    