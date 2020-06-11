import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(2, companies);

const example2 = ( companies ) => {
  const companiesArray = [];
  const hasCar = true;
  for ( const companie of companies ) {
    const comp = {
      name: companie.name[0].toUpperCase() + companie.name.slice(1),
      isOpen: companie.isOpen,
      usersLength: '',
      users: [],
    };
    for ( const user of companie.users ) {
      if ( hasCar === user.car ) {
        comp.usersLength++;
        comp.users.push( user );
      };
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
console.log('--- Completed skill - Example 2 --- ', example2( companies ) );

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y el
// booleano "hasCar". Para cada "company" debe conservar solo
// "users" cuyo valor de atributo "car" es igual al parámetro del
// función "hasCar" y el atributo "usersLength" deben indicar el total de
// "users" correspondientes al parámetro "hasCar".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the variable "companies" and the
// boolean "hasCar". For each "company" you must keep only the
// "users" whose attribute value "car" is equal to the parameter of the
// "hasCar" function and the "usersLength" attribute must indicate the number of
// "users" corresponding to the "hasCar" parameter.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et le
// booléen "hasCar". Pour chaque "company" vous devez garder uniquement les
// "users" dont la valeur de l'attribut "car" est égal au paramètre de la
// fonction "hasCar" et l'attribut "usersLength" doit renseigner le nombre de
// "users" correspondant au paramètre "hasCar".
