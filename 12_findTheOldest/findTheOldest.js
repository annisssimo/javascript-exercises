const people = [];

function getAge(person) {
    const currentDate = new Date();
  if ('yearOfDeath' in person) {
    return person.yearOfDeath - person.yearOfBirth;
  } 
  else return currentDate.getFullYear() - person.yearOfBirth;
}

  const findTheOldest = function(people) {
    people.sort((person1, person2) => getAge(person2) - getAge(person1));
    return people[0];
  }
  
  console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
