type myType = { name?: string, organization?: string, message?: string };

const first: myType = {};

first.name = 'Tyler Durden';

//
const prop = 'organization';
const second: myType = {
    name: 'Tyler Durden',
    [prop]: 'Fight Club'
};

const third: myType = {
    name: 'Tyler Durden',
    organization: 'Fight Club'
};


export {first, second, third}
