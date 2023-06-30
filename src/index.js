import "./styles/style.scss";
import random from 'lodash/random'
import _ from 'lodash'


const a = 15;

const b = undefined;

const x = NaN;

const c = b ?? a;

const y = x ?? a;

console.log('hi webpack')
console.log(random(0,10))
console.log(random(0,100))
console.log(_.partition([1, 2, 3, 4], n => n % 2))
