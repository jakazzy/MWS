const enhancing = require('./enhancing');

const {
    succeed,
    fail,
    repair,
    get,
} = enhancing;

const item = {
    name: 'item',
    enhancement: 13,
    durability: 60
}

const enhancedItem = {
    name: 'enhancedItem',
    enhancement: 20,
    durability: 70
}

describe('Repair item', () => {
    it('should restore durability to 100', () => {
        expect(repair(item).durability).toBe(100)
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
    });
    it('checks if value of item.enhancement 20 and the enhancement does not change', () => {
        let { enhancement } = enhancedItem;
        expect(succeed(enhancedItem).enhancement).toEqual(20)
    })
    it('checks if value of item.enhancement 20 and the durability does not change', () => {
        let { durability } = enhancedItem;
        expect(succeed(enhancedItem).durability).toEqual(durability)
    })
})

describe('When enhancement fails', () => {
    it('should check if when enhancement is less than 15 durability is decreased by 5', () => {
        let value = item.durability;
        value = value - 5;
        const number = fail(item).durability;
        expect(number).toEqual(value)
    });
    it('should check if when enhancement is more than 15 durability is decreased by 10', () => {
        let value = enhancedItem.durability;
        value = value - 10;
        const number = fail(enhancedItem).durability;
        expect(number).toEqual(value)
    });
    it('should check if when enhancement is more than 16 enhancement is decreased by 1', () => {
        let value = enhancedItem.enhancement;
        value = value - 1;
        const number = fail(enhancedItem).enhancement;
        expect(number).toEqual(value)
    });
})