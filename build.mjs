import archiver from 'archiver';
import fs from 'fs';

const out = fs.createWriteStream('./dist/app.zip');

const zip = archiver('zip', { zlib: { level: 9 } });
zip.pipe(out);
zip.directory('app', false);
zip.finalize();
