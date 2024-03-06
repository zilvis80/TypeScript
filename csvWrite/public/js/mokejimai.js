import { CSVWriter } from './csv-write.js';
const writer = new CSVWriter(['id', 'suma', 'gavejas', 'paskirtis']);
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
//# sourceMappingURL=mokejimai.js.map