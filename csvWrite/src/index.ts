import { appendFileSync } from 'fs';
interface Mokejimas {
  id: number;
  suma: number;
  gavejas: string;
  paskirtis: string;
}
type MokejimuStulpeliai = ('id' | 'suma' | 'gavejas' | 'paskirtis')[];
class csvWriter {
  constructor(private stulpeliai: MokejimuStulpeliai) {
    this.csv = this.stulpeliai.join(',') + '\n';
  }
  private csv: string;

  pridetiEilute(values: Mokejimas[]): void {
    let eilutes = values.map((v) => this.formatuotiEilute(v));
    this.csv += eilutes.join('\n');
  }
  private formatuotiEilute(m: Mokejimas): string {
    return this.stulpeliai.map((stul) => m[stul]).join(',');
  }
  save(filename: string): void {
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

// writer.save('./data/mokejimai.csv');

function logReturnString(value: string): string {
  console.log(value);
  return value;
}
function logReturnNumber(value: number): number {
  console.log(value);
  return value;
}
function logReturnBoolean(value: boolean): boolean {
  console.log(value);
  return value;
}
function logReturnValue<T>(value: T): T {
  console.log(value);
  return value;
}
const res3 = logReturnValue<string>('Paulius');
const res4 = logReturnValue<number>(34);
const res5 = logReturnValue<boolean>(true);

function getRandomArrayValue<T>(values: T[]): T {
  const i = Math.floor(Math.random() * values.length);
  return values[i];
}
interface User {
  name: string;
  score: number;
}
const users: User[] = [
  { name: 'Eligijus', score: 200 },
  { name: 'Juozas', score: 150 },
  { name: 'Petras', score: 70 },
  { name: 'Lukas', score: 90 },
];
const randomUser = getRandomArrayValue<User>(users);
console.log(randomUser);

interface HasID {
  id: number;
}
function addIdToValue<T>(value: T): T & HasID {
  const id = Math.random();
  return { ...value, id };
}
interface Post {
  title: string;
  likes: number;
}
const post = addIdToValue<Post>({ title: 'TypeScript valdo!', likes: 2 });
console.log(post.id, post.title, post.likes);

interface Collection<T> {
  data: T[];
  name: string;
}
const collection1: Collection<string> = {
  data: ['pienas', 'kava', 'cukrus'],
  name: 'drink ingredients',
};
const collection2: Collection<number> = {
  data: [6, 9, 42, 8, 10, 21],
  name: 'winning lottery numbers',
};
function randomCollectionItem<T>(c: Collection<T>): T {
  const i = Math.floor(Math.random() * c.data.length);
  return c.data[i];
}
const res1 = randomCollectionItem<string>(collection1);
const res2 = randomCollectionItem(collection2);

console.log(res1, res2);

class DataCollection<T>{
    constructor(private data: T[]){}
    loadOne(): T[]{
        return this.data
    }
    add(value: T): T[]{
        this.data.push(value)
        return this.data
    }
    
}

interface User {
   name: string
   score: number 
}
const users = new DataCollection<User>([
    {name:'Inga', score: 125}
    {name: 'Aurelija', score: 100}
    {name: 'Laura', score: 150}
])
users.add({name: 'Rita', score: 50})
console.log('load one - ', users.loadOne());
console.log('load all - ', users.loadAll());

