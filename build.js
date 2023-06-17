import fs from 'node:fs/promises';
import ranks from './ranks.js';

// Исправить RegExp для JSON
Object.values(ranks).forEach(rank => {
  rank.regexp = rank.regexp.toString();
});

fs.writeFile('ranks.json', JSON.stringify(ranks, null, '  '));
