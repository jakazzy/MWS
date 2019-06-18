module.exports = {
    succeed,
    fail,
    repair,
    get,
};

function succeed(item) {
    if (item.enhancement < 20) {
        item.enhancement++;
    }
    return {...item };
}

function fail(item) {
    if (item.enhancement < 15) {
        item.durability = item.durability - 5;
    }
    if (item.enhancement > 16) {
        item.enhancement--;
    }
    if (item.enhancement >= 15) {
        item.durability = item.durability - 10;
    }
    return {...item };
}

function repair(item) {
    return {...item, durability: 100 };
}

function get(item) {
    return {...item };
}


const item = {
    name: 'enhancedItem',
    enhancement: 20,
    durability: 70
}

console.log(succeed(item), 'suceed');
console.log(fail(item), 'fail')