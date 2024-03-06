import { appendFileSync } from 'fs';

export class CSVWriter<T> {
  constructor(private stulpeliai: (keyof T)[]) {
    this.csv = this.stulpeliai.join(',') + '\n';
  }
  private csv: string;

  save(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = '\n';

    console.log('file saved to', filename);
  }
  pridetiEilute(values: T[]): void {
    let eilutes = values.map((v) => this.formatuotiEilute(v));
    this.csv += eilutes.join('\n');
    console.log(this.csv);
  }
  private formatuotiEilute(value: T): string {
    return this.stulpeliai.map((stul) => value[stul]).join(',');
  }
}
