function verificarSituacao (nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3) /3

    if(media >= 7){
        return "Media" + media.toFixed(1) + ": Aprovado";
    } else if (media >=5){
        return "Media" + media.toFixed(1) + ": Aprovado";
    } else{
        return "Media" + media.toFixed(1) + ": Reprovado";
    }

}

console.log(verificarSituacao(8, 7.5,9));
console.log(verificarSituacao(6, 5, 5.5));
console.log(verificarSituacao(4, 3 ,2));