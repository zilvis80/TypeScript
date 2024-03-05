import { appendFileSync } from 'fs';
class csvWriter {
    constructor(stulpeliai) {
        this.stulpeliai = stulpeliai;
        this.csv = this.stulpeliai.join(',') + '\n';
    }
    pridetiEilute(values) {
        let eilutes = values.map((v) => this.formatuotiEilute(v));
        this.csv += eilutes.join('\n');
    }
    formatuotiEilute(m) {
        return this.stulpeliai.map((stul) => m[stul]).join(',');
    }
    save(filename) {
        appendFileSync(filename, this.csv);
        this.csv = '\n';
        console.log('file saved to', filename);
    }
}
const writer = new csvWriter(['id', 'suma', 'gavejas', 'paskirtis']);
writer.pridetiEilute([
    { id: 1, suma: 30, gavejas: 'Bronius Broniauskas', paskirtis: 'dovana' },
    {
        id: 2,
        suma: 160,
        gavejas: 'Kostas Kostauskas',
        paskirtis: 'Programavimo konsultacija',
    },
]);
function logReturnString(value) {
    console.log(value);
    return value;
}
function logReturnNumber(value) {
    console.log(value);
    return value;
}
function logReturnBoolean(value) {
    console.log(value);
    return value;
}
function logReturnValue(value) {
    console.log(value);
    return value;
}
const res3 = logReturnValue('Paulius');
const res4 = logReturnValue(34);
const res5 = logReturnValue(true);
function getRandomArrayValue(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const users = [
    { name: 'Eligijus', score: 200 },
    { name: 'Juozas', score: 150 },
    { name: 'Petras', score: 70 },
    { name: 'Lukas', score: 90 },
];
const randomUser = getRandomArrayValue(users);
console.log(randomUser);
function addIdToValue(value) {
    const id = Math.random();
    return Object.assign(Object.assign({}, value), { id });
}
const post = addIdToValue({ title: 'TypeScript valdo!', likes: 2 });
console.log(post.id, post.title, post.likes);
const collection1 = {
    data: ['pienas', 'kava', 'cukrus'],
    name: 'drink ingredients',
};
const collection2 = {
    data: [6, 9, 42, 8, 10, 21],
    name: 'winning lottery numbers',
};
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const res1 = randomCollectionItem(collection1);
const res2 = randomCollectionItem(collection2);
console.log(res1, res2);
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        return this.data;
    }
    add(value) {
        this.data.push(value);
        return this.data;
    }
}
const users = new DataCollection([
    { name: 'Inga', score: 125 },
    { name: 'Aurelija', score: 100 },
    { name: 'Laura', score: 150 }
]);
users.add({ name: 'Rita', score: 50 });
console.log('load one - ', users.loadOne());
console.log('load all - ', users.loadAll());
//# sourceMappingURL=index.js.map