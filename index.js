let person = {
    name: 'Esther',
    age: 30
};

function greet(newName, lastName) {
    person['name'] = newName;
    console.log('Hello, ' +person.name +lastName+ '!');
}

function square(number) {
    return number*number;
}

greet('John','Doe');
greet('Esther', 1);

console.log(square(3));