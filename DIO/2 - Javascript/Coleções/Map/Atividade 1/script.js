/*Atividade 1: Maps
Crie uma  função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema. */



function getAdmins(map) {
    let ADMIN = [];
    for([key, value] of map){
        
        if(value== 'ADMIN')
            ADMIN.push(key);

    }
    return ADMIN;
}

const usuarios = new Map();

usuarios.set('Vitoria', 'ADMIN');
usuarios.set('Mayara', 'USER');
usuarios.set('Vinicius', 'ADMIN');
usuarios.set('Fernada', 'USER');
usuarios.set('Stephanye', 'ADMIN');
usuarios.set('Jorge', 'USER');

document.write(usuarios);

console.log('\n       Array com todas as informações')
console.log(usuarios)

console.log('\n       Array apenas de, "ADMIN"')
console.log(getAdmins(usuarios));


document.write("<br><br>");
for (var i=0; i<getAdmins(usuarios).length; i++) {
    document.write("Array [" +i+ "] tem o valor: " +getAdmins(usuarios)[i]+ "<br><br>");
  }


document.write("Usuarios que são ADMIN: ");


document.write(getAdmins(usuarios));