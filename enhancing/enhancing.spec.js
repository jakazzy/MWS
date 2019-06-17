const enhancing = require('./enhancing');

const {
    succeed,
    fail,
    repair,
    get,
} = enhancing;

const item = {
    name: 'item',
    enhancement: 14,
    durability: 60
}
const success = succeed(item);
const needRepair = repair(item);
const failedItem = fail(item);
it('checks if value of item.enhancement less than zero increases by one', () => {
    expect(success.enhancement).toBe(15)
})