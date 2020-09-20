import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    {title: 'Origem animal', image: 'animais.svg'},
    {title: 'Frutas', image: 'frutas.svg'},
    {title: 'Doces e geléias', image: 'doces.svg'},
    {title: 'Ervas e raízes', image: 'ervas.svg'},
    {title: 'Grãos', image: 'graos.svg'},
    {title: 'Legumes', image: 'legumes.svg'},
    {title: 'Vegetais', image: 'vegetais.svg'}
  ]);
}