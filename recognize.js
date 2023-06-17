import ranks from './ranks.js';

// Отсортировать по кол-ву слов
const sortedByWordCount = Object.values(ranks).sort((a, b) => {
  const wordCountA = a.name.split(/[\s-]+/g).length;
  const wordCountB = b.name.split(/[\s-]+/g).length;
  return wordCountB - wordCountA;
});

export default function (text) {
  return sortedByWordCount.find(rank => {
    return text.match(rank.regexp);
  })?.name;
}