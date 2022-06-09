type NOTA = number | string

function MostrarNota(nota: NOTA){
    if(!nota) {
    console.log( "o usuario nao colocou uma nota") 
    return
    }


    if(nota > 0 && nota < 6){
    console.log( `O usuario deu a nota ${nota}`)
    }
    else {
        console.log( `O usuario deu a nota ${nota}, mas os valores vão de 1 á 5`)
    }

    
}
MostrarNota("")
MostrarNota(5)
MostrarNota(8)

