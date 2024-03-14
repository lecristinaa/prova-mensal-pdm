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
        matriculadoEm: "2024/02/23",
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
        matriculadoEm: "2024/04/23",
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
        matriculadoEm: "2024/02/25",
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
        matriculadoEm: "2024/02/29",
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
        matriculadoEm: "2024/12/23",
        numeroChamada: 1225
    },
]

export function listarAlunos(chamadaDeAlunos){
    chamadaDeAlunos.forEach(chamadaDeAlunos => { // Percorre todo o array
        
        console.log("Nome: " + chamadaDeAlunos.nome) // Aparece o nome do aluno
        console.log("RA: " + chamadaDeAlunos.numeroChamada) // Aparece o ra do aluno
    });          
}
listarAlunos(chamadaDeAlunos)

console.log("--------------------")

export function buscarAlunoPeloNumeroDaChamada(chamadaDeAlunos){
    chamadaDeAlunos.forEach(chamadaDeAlunos => { // Percorre todo o array
        if (chamadaDeAlunos.numeroChamada === 1221) { // Verifica se o RA é igual o procurado
            console.log("Aluno achado")
            return
        }
        console.log("Não achou nenhum aluno")
        
    })
}
buscarAlunoPeloNumeroDaChamada(chamadaDeAlunos)

console.log("--------------------")

export function listarAlunoPorMesMatricula(chamadaDeAlunos){
    chamadaDeAlunos.forEach(chamadaDeAlunos => { // Percorre todo o array
        chamadaDeAlunos.matriculadoEm = chamadaDeAlunos.matriculadoEm.split("/") // Separa o string da nota
        // pela / e devolve um array
        console.log(chamadaDeAlunos.matriculadoEm[1])
        if (chamadaDeAlunos.matriculadoEm[1] === "02") { // Verifica se a posição do array é igual a  2
            console.log("Aluno: " + chamadaDeAlunos.nome)
            return
        }
        
    })
}
listarAlunoPorMesMatricula(chamadaDeAlunos)

console.log("--------------------")

export function listarAlunosAprovados(aluno) {
    for (let i = 0; i < aluno.length; i++) { // Percorre todo o array 
        for (let j = 0; j < aluno[i].materias.length; j++) { // Percorre o array das materias
            if (aluno[i].materias[j].nota >= 6 && aluno[i].materias[j].presenca >= 75) { // Verifica as condições
                console.log("APROVADO")
                console.log("NOTA: " + aluno[i].materias[j].nota)
                console.log("PRESENCA: " + aluno[i].materias[j].presenca)
                
            }
        }
    }
}
listarAlunosAprovados(chamadaDeAlunos[0])

console.log("--------------------")

export function listarAlunosReprovados(aluno) {
    for (let i = 0; i < aluno.length; i++) { // Percorre todo o array e mostra os nomes e notas
        for (let j = 0; j < aluno[i].materias.length; j++) { // Percorre o array das materias
            if (aluno[i].materias[j].nota < 6 && aluno[i].materias[j].presenca < 75) { // Verifica as condições
                console.log("REPROVADO")
                console.log("NOTA: " + aluno[i].materias[j].nota)
                console.log("PRESENCA: " + aluno[i].materias[j].presenca)
                
            }
        }
    }
}
listarAlunosReprovados(chamadaDeAlunos[0])