const breakdown = document.querySelector('.breakdown');

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

breakdown.addEventListener('click', makeGreen);

// Regular
console.log('hello');

// Interpolated
console.log('Hello, I am %s!', 'Sergey');

// Styled
console.log('%c Somebody once told me the world...', 'font-size: 50px');

// warning!
console.warn("Oh nooo");

// Error :|
console.error("Oops, an error!");

// Info
console.info('Crocodiles eat 3-4 people per year')

// Testing
console.assert(1 === 1, 'Maybe that is wrong?');
console.assert(1 === 2, 'That is definetely wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(breakdown);
console.dir(breakdown);

console.clear();
// Grouping together
dogs.forEach((dog) => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);

    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count("icecream");
console.count("icecream");
console.count("icecream");
console.count("icecream");
console.count("icecream");

// timing
console.time('fetching data');
fetch('https://api.github.com/users/grutax')
    .then((rawData) => rawData.json())
    .then((data) => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// table
console.table(dogs);