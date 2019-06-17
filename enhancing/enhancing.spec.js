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

describe('Repair item', () => {
    it('should restore durability to 100', () => {
        expect(needRepair.durability).toBe(100)
    })
});

describe('Checks item properties', () => {
    it('should check if item has a property name', () => {
        expect(item).toHaveProperty('name')
    });
    it('should check if item has a property enhancement', () => {
        expect(item).toHaveProperty('enhancement')
    });
    it('should check if item has a property durability', () => {
        expect(item).toHaveProperty('durability')
    });

})

it('checks if value of item.enhancement less than zero increases by one', () => {
    expect(success.enhancement).toBe(15)
})