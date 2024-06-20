var velocidade = Number(prompt("velocidade:")) 

if(velocidade < 40){
    alert("baixa velocidade")
}

else if(velocidade < 60 && velocidade > 40){
    alert("velocidade ideal")
}
else if (velocidade > 60 && velocidade < 120){
    alert("alta velocidade")
}
else{
    alert("perigosamente rápido, você vai ser multado")
}