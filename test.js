import { test } from 'uvu';
import * as assert from 'uvu/assert';

import recognize from './recognize.js';

test('Простые звания', () => {
  assert.is(recognize('привет как дела сержант?'), 'Сержант');
});

test('Двойные', () => {
  assert.is(recognize('привет как дела старший сержант?'), 'Старший сержант');
  assert.is(recognize('привет как дела младший майор?'), 'Майор');
});

test('Тройные', () => {
  assert.is(recognize('привет как дела гвардии старший сержант?'), 'Гвардии старший сержант');
});

test('В другом порядке', () => {
  assert.is(recognize('привет как дела сержант гвардии?'), 'Гвардии сержант');
  assert.is(recognize('привет как дела старший лейтенант гвардии?'), 'Гвардии старший лейтенант');
});

test('Неправильные', () => {
  assert.is(recognize('привет как дела младший генерал?'), undefined);
});

test('ЧВК', () => {
  assert.is(recognize('вагнеровец'), 'Сотрудник ЧВК');
});

test.run();