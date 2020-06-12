import {cleanConsole, createAll} from './data';

const companies = createAll();

const example7Part1 = ( id ) => {
  return companies[id].name;
};

const example7Part2 = ( id ) => {
  let nameCompany;
  for ( const [index, companie] of companies.entries() ) {
    if ( companie.id === id ) {
      nameCompany = companie.name;
      companies.splice( index, 1 );
    };
  };
  return `La compañia ${ nameCompany } se ha eliminado exitosamente...`;
};

const example7Part3 = ( id ) => {
  const PATH = companies[id];
  const company = {
    name: PATH.name,
    id: PATH.id,
    isOpen: PATH.isOpen,
    usersLength: PATH.usersLength,
  };
  return company;
};

const example7Part4 = ( id ) => {
  const user = {
    id: companies[id].users.length,
    firstName: 'Juan',
    lastName: 'Delgado',
    age: 35,
    car: true,
  };
  Object.assign( companies[id].users, {[companies[id].users.length]: user} );
  companies[id].usersLength = companies[id].users.length;
  return companies[id];
};

const example7Part5 = ( id, name, isOpen ) => {
  for ( const companie of companies ) {
    if ( companie.id === id ) {
      companie.name = name;
      companie.isOpen = isOpen;
    };
  };
  return companies;
};

const example7Part6 = ( idCompanie, idUser ) => {
  let userName;
  let nameCompany;
  let indexCompany;
  for ( const [index, companie] of companies.entries() ) {
    if ( companie.id === idCompanie ) {
      indexCompany = index;
      nameCompany = companie.name;
      for ( const [i, user] of companie.users.entries() ) {
        if ( user.id === idUser ) {
          console.log( 'Usuario a eliminar: ', user );
          userName = `${user.firstName} ${ user.lastName }`;
          const userSplice = companies[indexCompany].users;
          userSplice.splice( i, 1 );
        };
      };
    };
  };
  return `El usuario ${ userName } de la empresa ${ nameCompany } se ha eliminado correctamente`;
};

const example7Part7 = ( idCompanie, idUser ) => {
  for ( const [index, companie] of companies.entries() ) {
    if ( companies[index].id === idCompanie ) {
      for ( const user of companie.users ) {
        if ( user.id === idUser ) {
          console.log(`Datos del usuario ${ user.firstName } ${ user.lastName } de la empresa ${ companie.name }`);
          return user;
        };
      };
    };
  };
};

const user = {
  firstName: 'Carlos',
  age: 26,
  car: false,
  lastName: 'Molero',
};

const example7Part8 = ( idCompanie, idUser, userM ) => {
  for ( const [index, companie] of companies.entries() ) {
    if ( companies[index].id === idCompanie ) {
      for ( const user of companie.users ) {
        if ( user.id === idUser ) {
          console.log('Usuario a mdificar: ', user);
          user.firstName = userM.firstName;
          user.age = userM.age;
          user.car = userM.car;
          user.lastName = userM.lastName;
          return user;
        };
      };
    };
  };
};

const example7Part9 = ( idCompanie, idCompanie1, idUser ) => {
  let userM;
  let indexCompany;
  let company;
  let company1;
  for ( const [index, companie] of companies.entries() ) {
    if ( companies[index].id === idCompanie ) {
      indexCompany = index;
      company = companie.name;
      for ( const [i, user] of companie.users.entries() ) {
        if ( user.id === idUser ) {
          userM = user;
          const userSplice = companies[indexCompany].users;
          userSplice.splice( i, 1 );
          companie.usersLength = companie.users.length;
          console.log( 'Usuario a transferir: ', userM );
        };
      };
    };
    if ( companies[index].id === idCompanie1 ) {
      company1 = companie.name;
      userM.company = companie.name; // Cambio nombre de la compañia a transferir el usuario
      userM.id = companie.users.length+1; // Se asigna nuevo id al usuario transferido
      Object.assign( companie.users, {[companie.users.length]: userM} );
    };
  };
  return `El usuario ${ userM.firstName } ${ userM.lastName } se ha transferido de: ${ company } a: ${ company1 }`;
};

cleanConsole(7, companies);
console.log('----Completed Skill-EXAMPLE 7 part 1---', example7Part1( companies[0].id ) );
console.log('----Completed Skill-EXAMPLE 7 part 2---', example7Part2( companies[2].id ) );
console.log('----Completed Skill-EXAMPLE 7 part 3---', example7Part3( companies[3].id ) );
console.log('----Completed Skill-EXAMPLE 7 part 4---', example7Part4( companies[5].id ) );
console.log('----Completed Skill-EXAMPLE 7 part 5---', example7Part5( companies[4].id, 'Gucci', true ) );
console.log('----Completed Skill-EXAMPLE 7 part 6---', example7Part6( companies[5].id, companies[5].users[2].id ) );
console.log('----Completed Skill-EXAMPLE 7 part 7---', example7Part7( companies[6].id, companies[6].users[4].id ) );
console.log('--Completed Skill-EXAMPLE 7 part 8--', example7Part8( companies[6].id, companies[6].users[4].id, user ) );
console.log('---CS - EXAMPLE 7 part 9---', example7Part9( companies[0].id, companies[5].id, companies[0].users[4].id ));
console.log( 'Compañias modificadas en su totalidad: ', companies );

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".

// Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.

// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".

// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".

// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".

// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".

// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Partie 1 : Créer une fonction prenant en paramètre un "id" de "company" et
// retournant le nom de cette "company".

// Partie 2 : Créer une fonction prenant en paramètre un "id" de "company" et
// supprimant la "company" de la liste.

// Partie 3 : Créer une fonction prenant en paramètre un "id" de "company" et
// permettant de faire un PATCH (comme avec un appel HTTP) sur tous les
// attributs de cette "company" sauf sur l'attribut "users".

// Partie 4 : Créer une fonction prenant en paramètre un "id" de "company" et un
// nouvel "user" dont le nom est "Delgado", le prénom "Juan", ayant 35 ans et
// une voiture. Le nouvel "user" doit être ajouté à la liste des "users" de cette
// "company" et avoir un "id" généré automatiquement. La fonction doit aussi modifier
// l'attribut "usersLength" de "company".

// Partie 5 : Créer une fonction prenant en paramètre un "id" de "company" et
// permettant de faire un PUT (comme avec un appel HTTP) sur cette "company" sauf
// sur l'attribut "users".

// Partie 6 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user". La fonction doit supprimer cet "user" de la liste des "users"
// de la "company" et modifier l'attribut "usersLength" de "company".

// Partie 7 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user" permettant de faire un PATCH (comme avec un appel HTTP) sur cet
// "user".

// Partie 8 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user" permettant de faire un PUT (comme avec un appel HTTP) sur cet
// "user".

// Partie 9 : Créer une fonction prenant en paramètre deux "id" de "company" et
// un "id" de "user". La fonction doit permettre de transférer l'user en paramètre
// de la 1re "company" à la 2e "company". L'attribut "usersLength" de chaque
// "company" doit être mis à jour.
