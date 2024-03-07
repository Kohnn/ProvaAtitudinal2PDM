let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        numeroChamada: 1225
    },
]



function NomeNota(aluno){
    for(let i = 0; i < aluno.materias.length; ++i){
        console.log(`nome:  ${aluno.nome} materia:  ${aluno.materias[i].nome} nota:  ${aluno.materias[i].nota}`)
    }
}
NomeNota(chamadaDeAlunos[0])

function mostrarAprovado(ListaAlunos){
    console.log("--------APROVADOS--------")
    for (let i = 0; i < ListaAlunos.length; i++) {
        for (let j = 0; j < ListaAlunos[i].materias.length; j++) {
           if (ListaAlunos[i].materias[j].nota >= 6 && ListaAlunos[i].materias[j].presenca >= 75 ) {
              console.log(`O aluno ${ListaAlunos[i].nome} foi aprovado em ${ListaAlunos[i].materias[j].nome}`)
           }else{
            
           }
        
        }
        
    }
    console.log("-------------------------")
}
mostrarAprovado(chamadaDeAlunos)

function mostrarReprovados(ListaAlunos){
    console.log("--------REPROVADOS--------")
    for (let i = 0; i < ListaAlunos.length; i++) {
        for (let j = 0; j < ListaAlunos[i].materias.length; j++) {
           if (ListaAlunos[i].materias[j].nota >= 6 && ListaAlunos[i].materias[j].presenca >= 75 ) {
     
           }else{
            console.log(`O aluno ${ListaAlunos[i].nome} foi reprovado em ${ListaAlunos[i].materias[j].nome}`)
           }
        
        }
        
    }
    console.log("-------------------------")
}
mostrarReprovados(chamadaDeAlunos)

// function mostrarMelhoresAlunos(ListaAlunos){

//     let notas = [2]
//     for (let i = 0; i < ListaAlunos.length; i++) {
//         for (let j = 0; j < ListaAlunos[i].materias.length; j++) {
//             // if()
//         }
//     }
// }
// jorge eu sabo mas tbm n sabia, acontece :(

