import map = require('lodash/map');

export function calculate(input: Array<number>){
    return map(input, n => n + 3);
}
