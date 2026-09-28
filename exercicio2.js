const idadeVotante = 19;

if (idadeVotante <16){
    console.log("não pode votar");
} else if (idadeVotante >= 16 && idadeVotante <=17 || idadeVotante >70){
    console.log("voto facultativo");
} else {
    console.log("voto obrigatório");
}