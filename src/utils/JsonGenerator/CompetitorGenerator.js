const fs = require('fs');

function prompt(question) {
  return new Promise((resolve, reject) => {
    const { stdin, stdout } = process;

    stdin.resume();
    stdout.write(question);

    stdin.on('data', data => resolve(data.toString().trim()));
    stdin.on('error', err => reject(err));
  });
}

const COMPETITOR_NAMES = [
  'Soriana',
  'OxxO',
  'Chedraui',
  'Waldos',
  'Puma Abarrotero',
  'Zorro',
  'La Comer',
  'Costco',
  'Calimax',
  'Ley',
  'H-E-B',
];

const comp = [];

prompt('Enter number of objects in the array: ')
  .then((number) => {
    for (let i = 0; i < number; i += 1) {
      const compObj = {
        compName: `${COMPETITOR_NAMES[i % COMPETITOR_NAMES.length]} ${i + 1}`,
        image: 'https://loremflickr.com/640/480/store',
        store: 1212,
      };
      comp.push(compObj);
    }
    fs.writeFile('./Competitors.json', JSON.stringify(comp), 'utf-8',
      (err) => {
        if (err) {
          console.log('Error writing the file: ', err);
        }
        console.log('The file was saved!');
        process.exit();
      });
  });
