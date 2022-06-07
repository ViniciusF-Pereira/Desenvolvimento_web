const alunos = [{
        nome: "João",
        CIENCIAS: [{
            SOCIOLOGIA: 7,
            BIOLOGIA: 7,
            GEOGRAFIA: 7,
        }],
        EXATAS: [{
            MATEMATICA: 6,
            FISICA: 8,
            QUIMICA: 9,
        }],
        LIGUISTICAS: [{
            PORTUGUES: 7,
            HISTORIA: 4,

        }],
        nota: PORTUGUES,
        turma: "1B",
    },
    {
        nome: "Sofia",
        CIENCIAS: [{
            SOCIOLOGIA: 10,
            BIOLOGIA: 10,
            GEOGRAFIA: 10,
        }],
        EXATAS: [{
            MATEMATICA: 10,
            FISICA: 10,
            QUIMICA: 10,
        }],
        turma: "1B",

    }, {
        nome: "Paulo",
        CIENCIAS: [{
            SOCIOLOGIA: 2,
            BIOLOGIA: 7,
            GEOGRAFIA: 7,
        }],
        EXATAS: [{
            MATEMATICA: 2,
            FISICA: 4,
            QUIMICA: 6,
        }],

        turma: "2C",
    }
];


LIGUISTICAS



function AlunosAprovados(arr, media) {

    let aprovados = [];


    for (let i = 0; i < arr.length; i++) {

        const { nota, nome } = arr[i];


        if (nota >= media) {
            aprovados.push(nome);

        }
    }

    return aprovados;

}

console.log(AlunosAprovados(alunos, 5));