var idade = Number(prompt("Qual a sua faixa etária?")) 


if(idade < 0 && idade > -1000){
    alert("então você nem nasceu🤨")
}
else if (idade >= 0 && idade <= 2){
    alert("então você é bebê👶🏻😭")
}
else if(idade > 2 && idade <= 12){
    alert("então você é criança👧🏻😀")
}
else if(idade > 12 && idade <=17){
    alert("entâo você é adolescente🙍🏻‍♀️😈")
}
else if(idade > 17 && idade <=60){
    alert("então você é adulto🤷🏻‍♀️😭")
}
else if (idade > 60 && idade <= 80) {
    alert("então você é idoso👴🤶🏻")
}
else{
    alert("então você morreu🕊️♰")
}
