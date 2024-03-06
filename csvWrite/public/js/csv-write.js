import { appendFileSync } from 'fs';
export class CSVWriter {
    constructor(stulpeliai) {
        this.stulpeliai = stulpeliai;
        this.csv = this.stulpeliai.join(',') + '\n';
    }
    save(filename) {
        appendFileSync(filename, this.csv);
        this.csv = '\n';
        console.log('file saved to', filename);
    }
    pridetiEilute(values) {
        let eilutes = values.map((v) => this.formatuotiEilute(v));
        this.csv += eilutes.join('\n');
        console.log(this.csv);
    }
    formatuotiEilute(value) {
        return this.stulpeliai.map((stul) => value[stul]).join(',');
    }
}
//# sourceMappingURL=csv-write.js.map