const data = [
    { id: 1, nome: "Capitu", 
        idade: 15, sexo: "F",
        especie: "Calopsita"
    },
    {
      id: 2, nome: "Bentinho",
        idade: 5, sexo: "M",
        especie: "Cachorro"
    }
];

function listar() {
    return data;
}

function listarPorId(id) {
    const pet = data.find(pet => pet.id === id)
    if(!pet) {
        return {
            erro: true,
            mensagem: "Pet não encontrado!"
        };
    }
    return pet;
}

function cadastrar(pet) {
    pet.id = data.length+1;
    data.push(pet);
    

    if(pet.nome == undefined){
        return{
            erro: true,
            mensagem: "Campo 'nome' é obrigatório!"
        };
    }

    if(pet.idade == undefined){
        return{
            erro: true,
            mensagem: "Campo 'idade' é obrigatório!"
        };
    }

    if(pet.sexo == undefined){
        return{
            erro: true,
            mensagem: "Campo 'sexo' é obrigatório!"
        };
    }

    if(pet.especie == undefined){
        return{
            erro: true,
            mensagem: "Campo 'especie' é obrigatório!"
        };
    }

    if(pet.idade <= 0){
        return{
            erro: true,
            mensagem: "Campo 'idade' deve ser maior ou igual a zero!"
        };
    }
    if(pet.sexo == 'M' || 'F'){
        return{
            erro: true,
            mensagem: "Campo 'sexo' deve ser 'M' ou 'F'!"
        }
    }
    return pet;
}

function editarPorId(id,pet) {
    const index = data.findIndex(pet => pet.id === id);
    if(index === -1)
        return {
            erro: true, 
            mensagem: "Pet não encontrado!"}
    if(pet.idade <= 0){
        return{
            erro: true,
            mensagem: "Campo 'idade' deve ser maior ou igual a zero!"
        };
    }
    if(pet.sexo == 'M' || 'F'){
        return{
            erro: true,
            mensagem: "Campo 'sexo' deve ser 'M' ou 'F'!"
        }
    }
    return id;
}

function deletarPorId(id) {
    const index = data.findIndex(pet => pet.id === id);
    
    if(index === id -1){
        return{
        erro: false,
        mensagem: "Pet deletado com sucesso!"
        };
    }
    
    if(index === -1){
        return {
        erro: true, 
        mensagem: "Pet não encontrado!"}
        };
    }

module.exports = {
    listar,
    listarPorId,
    cadastrar,
    editarPorId,
    deletarPorId
}