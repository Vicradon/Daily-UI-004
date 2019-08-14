const $ = node => document.querySelector(`.${node}`);
const log = item => console.log(item);
const all = node => document.querySelectorAll(node);

const rows = "1,2,3,4,5,6,7,8,9".split(',').map(item => all(`.row${item} span`));
const rows6to9 = '6,7,8,9'.split(',').map(item => all(`row${item} span`))

const add_vert = node => node.classList.add('verticalize');
const add_vert2 = node => node.classList.add('verticalize_6to9');

rows.forEach(x => x.forEach(y => add_vert(y)));
rows6to9.forEach(x => x.forEach(y => add_vert2(y)));