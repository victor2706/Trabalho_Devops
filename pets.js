
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

function cadastrar(pet1) {
   pet1.id = data.length + 1;
    data.push(pet1);

    
    return pet;
}

function editarPorId(id, pet) {
    const index = data.findIndex(pet => pet.id === id);
    if(index === -1)
        return {erro: true, mensagem: "Pet não encontrado!"}
}

function deletarPorId(id) {
    const index = data.findIndex(pet => pet.id === id);
    if(index === -1) 
    return {erro: true, mensagem: "Pet não encontrado!"}
}

module.exports = {
    listar,
    listarPorId,
    cadastrar,
    editarPorId,
    deletarPorId
}