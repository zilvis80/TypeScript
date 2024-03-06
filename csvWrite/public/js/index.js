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
writer.save('./data/mokejimai.csv');
//# sourceMappingURL=index.js.map