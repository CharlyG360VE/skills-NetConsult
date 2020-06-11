import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, companies);

export const example1 = ( companies ) => {
  const companiesArray = [];
  for ( const companie of companies ) {
    const comp = {
      name: companie.name[0].toUpperCase() + companie.name.slice(1),
      isOpen: companie.isOpen,
      usersLength: companie.usersLength,
      users: [],
    };

    for ( const user of companie.users ) {
      if ( user.firstName === undefined ) {
        user.firstName = '';
      } else if ( user.lastName === undefined ) {
        user.lastName = '';
      };
      if ( user.firstName ) {
        const firstName = user.firstName[0].toUpperCase() + user.firstName.slice(1);
        user.firstName = firstName;
      };
      if ( user.lastName ) {
        const lastName = user.lastName[0].toUpperCase() + user.lastName.slice(1);
        user.lastName = lastName;
      };
      comp.users.push( user );
    };
    comp.users.sort( ( a, b ) => {
      if ( a.firstName > b.firstName ) {
        return 1;
      } else if ( a.firstName < b.firstName ) {
        return -1;
      };
      return 0;
    } );
    companiesArray.push( comp );
  };
  companiesArray.sort( ( a, b ) => {
    if ( a.usersLength < b.usersLength ) {
      return 1;
    } else if ( a.usersLength > b.usersLength ) {
      return -1;
    };
    return 0;
  } );
  return companiesArray;
};
console.log('--- Completed skill - Example 1 --- ', example1( companies ) );

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
