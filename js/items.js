window.content.items = [ //  quality table --> 0:poor  1:common  2:uncommon  3:rare  4:epic  5:legendary  6:artifact  7:heirloom
    {
        id: 1,
        name: 'One',
        equipable: true,
        quality: 3,
        slotType: {
            type: 'weapon',
            name: 'Sword',
            subtype: 'One-Hand',
        },
        icon: 'inv_sword_04',
        baseMinDamage: 1,
        baseMaxDamage: 2,
    },
    {
        id: 2,
        name: 'Ruined Pelt',
        quality: 0,
        equipable: false,
        icon: 'inv_misc_pelt_wolf_ruin_04',
        stackMaxSize: 20,
        stackSize: 1,
        sellPrice: new BigNumber(5),
    },
    {
        id: 4,
        name: 'Three',
        equipable: true,
        slotType: {
            type: 'trinket',
            name: 'Trinket',
        },
        icon: null,
        requiredLevel: 5,
    },
    {
        id: 5,
        name: 'poor',
        quality: 0,
        icon: null,
    },
    {
        id: 6,
        name: 'uncommon',
        quality: 2,
        icon: null,
    },
    {
        id: 7,
        name: 'rare',
        quality: 3,
        icon: null,
    },
    {
        id: 8,
        name: 'epic',
        quality: 4,
        icon: null,
    },
    {
        id: 9,
        name: 'legendary',
        quality: 5,
        icon: null,
    },
    {
        id: 10,
        name: 'Thousand',
        equipable: true,
        quality: 4,
        slotType: {
            type: 'weapon',
            name: 'Sword',
            subtype: 'One-Hand',
        },
        icon: 'inv_sword_04',
        baseMinDamage: 167,
        baseMaxDamage: 209,
        requiredLevel: 60,
        quote: 'A taste of Power.',
    },
]