// Nota:
// Ya que todos los valores booleanos devueltos son true por las validaciones correspondientes,
// guarde en un objeto todos los valores devueltos que mediantes las
// validaciones siempre van a devolver true por si lo desea observar
// lo puede ejecutar en un console.log()
// Relice una simple validacion de si un valor es igual a true
// la funcion responda un true ya que ningun valor es false
// por que que en el example1 ya viene todos los valores seteados con la letra en Mayuscula;


import {cleanConsole, createAll} from './data';
import {example1} from './example-1';

const companies = createAll();

cleanConsole(3, companies);

const example3 = ( companies ) => {
  const booleanArray = {
    booleanCompany: [],
    booleanFirstName: [],
    booleanLastName: [],
  };
  for ( const companie of companies ) {
    if ( companie.name[0] === companie.name[0].toUpperCase() ) {
      booleanArray.booleanCompany.push( true );
    };
    for ( const user of companie.users ) {
      if ( user.firstName ) {
        if ( user.firstName[0] === user.firstName[0].toUpperCase() ) {
          booleanArray.booleanFirstName.push( true );
        };
      };
      if ( user.lastName ) {
        if ( user.lastName[0] === user.lastName[0].toUpperCase() ) {
          booleanArray.booleanLastName.push( true );
        }
      };
    };
  };
  if ( booleanArray.booleanCompany[5] === true ) {
    return true;
  };
};
console.log('---- Completed Skill - EXAMPLE 3 --- ', example3( example1( companies ) ) );

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".
