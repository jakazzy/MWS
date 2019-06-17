function succeed(item) {
    if (item.enhancement < 20) {
        item.enhancement++;
    }
    return {...item };
}

function fail(item) {
    if (item.enhancement < 15) {
        durability = durability - 5;
    }
    if (item.enhancement > 16) {
        durability--;
    }
    if (item.enhancement >= 15) {
        durability = durability - 10;
    }
    return {...item };
}

function repair(item) {
    return {...item, durability: 100 };
}

function get(item) {
    return {...item };
}

export default {
    succeed,
    fail,
    repair,
    get,
};