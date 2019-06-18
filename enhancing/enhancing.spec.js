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

const enhancedItem = {
    name: 'enhancedItem',
    enhancement: 20,
    durability: 70
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
    it('should be greater than or equal to 0(item\'s enhancements)', () => {
        expect(item.enhancement).toBeGreaterThanOrEqual(0);
    })
    it('should be less than or equal to 20(item\'s enhancements)', () => {
        expect(item.enhancement).toBeLessThanOrEqual(20);
    })
    it('should be greater than or equal to 0(item\'s durability)', () => {
        expect(item.durability).toBeGreaterThanOrEqual(0);
    })
    it('should be less than or equal to 100(item\'s durability)', () => {
        expect(item.durability).toBeLessThanOrEqual(100);
    })
})

describe('when enhancement suceeds', () => {
    it('checks if value of item.enhancement increases by one', () => {
        let { enhancement } = item;
        enhancement++;
        expect(succeed(item).enhancement).toEqual(enhancement)
    })
})