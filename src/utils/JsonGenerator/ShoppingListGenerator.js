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

const SHOPPINGLISTS_NAMES = [
  'OxxO Cofradias',
  'Soriana Gobernadora',
  'Frescos',
  'Panaderia',
  'Carnes Rojas',
  'Dulces',
  'San Valentin',
  'Cuaresma',
];

const ITEMS_NAMES = [
  'Atun',
  'Bocadin',
  'Platano Chiapas',
  'Sandia',
  'Arrachera',
  'Dulces',
  'Television',
  'Tostadas',
];

const shop = [];
let nLists;

prompt('Enter number of lists: ')
  .then((number) => {
    nLists = number;
    return prompt('Enter max number of items per list: ');
  })
  .then((nItems) => {
    for (let i = 0; i < nLists; i += 1) {
      const listObj = {
        listName: `${SHOPPINGLISTS_NAMES[i % SHOPPINGLISTS_NAMES.length]} ${i + 1}`,
        store: 1212,
        items: Array.from(Array(Math.floor(Math.random() * nItems)))
          .map((_, idx) => ({
            index: idx,
            itmName: `${ITEMS_NAMES[Math.floor(Math.random() * ITEMS_NAMES.length)]} ${idx + 1}`,
            upc: Math.random().toString().slice(2, 11),
          })),
      };
      shop.push(listObj);
    }
    fs.writeFile('./Shoppinglists.json', JSON.stringify(shop), 'utf-8',
      (err) => {
        if (err) {
          console.log('Error writing the file: ', err);
        }
        console.log('The file was saved!');
        process.exit();
      });
  });
