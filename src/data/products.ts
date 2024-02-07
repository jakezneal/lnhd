type Price = {
    retail: string;
    rental: object;
};

export type Product = {
    type: string;
    brand: String;
    description: string;
    imageUrl: string;
    colour: string;
    price: Price;
    minimumRentalPeriod: string;
    tags?: object;
};

const productsList = [
    {
        type: 'T-shirt',
        brand: 'Burberry',
        description: 'Brand-embroidered crewneck cotton-jersey T-shirt',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R04257553_RAIN_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'Rain',
        price: {
            retail: '£450',
            rental: {
                3: '£15',
                4: '£20',
                5: '£25',
                6: '£30',
            },
        },
        minimumRentalPeriod: '3 days',
        tags: [
            'oversized',
            'burberry',
        ]
    },
    {
        type: 'T-shirt',
        brand: 'Allsaints',
        description: 'Underground graphic-print cotton T-shirt',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R03920651_JETBLACK_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'Jet Black',
        price: {
            retail: '£55',
            rental: {
                3: '£5',
                4: '£10',
                5: '£15',
                6: '£20',
            },
        },
        minimumRentalPeriod: '3 days',
        tags: [
            'graphicprint',
            'relaxedfit',
        ]
    },
    {
        type: 'T-shirt',
        brand: 'Gallery Dept',
        description: 'French branded-print cotton-jersey T-shirt',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R04216265_CREAM_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'Cream',
        price: {
            retail: '£225',
            rental: {
                3: '£15',
                4: '£20',
                5: '£25',
                6: '£30',
            },
        },
        minimumRentalPeriod: '3 days',
        tags: [
            'french',
            'brandedprint',
        ]
    },
    {
        type: 'Trousers',
        brand: 'Rick Owens',
        description: 'Mastodon tapered cotton-jersey cargo trousers',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R04264330_DUST_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'Dust',
        price: {
            retail: '£795',
            rental: {
                3: '£30',
                4: '£60',
                5: '£90',
                6: '£120',
            },
        },
        minimumRentalPeriod: '3 days',
        tags: [
            'tapered',
            'cargo',
        ]
    },
    {
        type: 'Swim Shorts',
        brand: 'Versace',
        description: 'Brand-print slip-pocket swim shorts',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R04268839_BLACKWHITE_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'Black+White',
        price: {
            retail: '£380',
            rental: {
                3: '£15',
                4: '£20',
                5: '£25',
                6: '£30',
            },
        },
        minimumRentalPeriod: '3 days',
    },
    {
        type: 'Hoody',
        brand: 'Palm Angels',
        description: 'Foggy branded-print cotton-jersey hoody',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R04263290_BLACKWHITE_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'Black White',
        price: {
            retail: '£490',
            rental: {
                3: '£15',
                4: '£20',
                5: '£25',
                6: '£30',
            },
        },
        minimumRentalPeriod: '3 days',
    },
    {
        type: 'Shirt',
        brand: 'Off-White',
        description: 'Logo-jacquard cotton and silk-blend shirt',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R04244913_BLACK_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'Black',
        price: {
            retail: '£690',
            rental: {
                3: '£30',
                4: '£60',
                5: '£90',
                6: '£120',
            },
        },
        minimumRentalPeriod: '3 days',
        tags: [
            'virgilabloh',
            'silk',
        ]
    },
    {
        type: 'T-shirt',
        brand: 'Palm Angels',
        description: 'Brand-embellished crewneck cotton-jersey T-shirt',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R04263282_OFFWHITEGUNM_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'Off White Gunm',
        price: {
            retail: '£415',
            rental: {
                3: '£15',
                4: '£20',
                5: '£25',
                6: '£30',
            },
        },
        minimumRentalPeriod: '3 days',
        tags: [
            'crewneck',
        ]
    },
    {
        type: 'Coat',
        brand: 'Rick Owens',
        description: 'Rick Owens x Moncler Cyclopic relaxed-fit shell-down coat',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R04250308_BLACK_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'Black',
        price: {
            retail: '£1710',
            rental: {
                3: '£60',
                4: '£120',
                5: '£180',
                6: '£240',
            },
        },
        minimumRentalPeriod: '3 days',
        tags: [
            'moncler',
            'shelldown',
        ]
    },
    {
        type: 'Sweatshirt',
        brand: 'Balmain',
        description: 'Logo-print ribbed-trim cotton-jersey sweatshirt',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R04249807_BLACKWHITE_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'Black White',
        price: {
            retail: '£525',
            rental: {
                3: '£15',
                4: '£20',
                5: '£25',
                6: '£30',
            },
        },
        minimumRentalPeriod: '3 days',
        tags: [
            'ribbed',
        ]
    },
    {
        type: 'Sweatshirt',
        brand: 'Off-White',
        description: 'Brand-embroidered cotton-jersey sweatshirt',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R04244925_RAINDRUM_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'Rain Drum',
        price: {
            retail: '£645',
            rental: {
                3: '£15',
                4: '£20',
                5: '£25',
                6: '£30',
            },
        },
        minimumRentalPeriod: '3 days',
    },
    {
        type: 'Shorts',
        brand: 'Givenchy',
        description: 'Brand-print relaxed-fit cotton-jersey shorts',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R04230625_MINERALBLUE_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'Mineral Blue',
        price: {
            retail: '£590',
            rental: {
                3: '£15',
                4: '£20',
                5: '£25',
                6: '£30',
            },
        },
        minimumRentalPeriod: '3 days',
        tags: [
            'relaxedfit',
        ]
    },
    {
        type: 'Hoody',
        brand: 'Off-White',
        description: 'Tattoo Arrow logo-embroidered cotton-jersey hoody',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R04244912_WHITEBLACK_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'White Black',
        price: {
            retail: '£785',
            rental: {
                3: '£15',
                4: '£20',
                5: '£25',
                6: '£30',
            },
        },
        minimumRentalPeriod: '3 days',
        tags: [
            'tattoo',
            'arrow',
        ]
    },
    {
        type: 'Trousers',
        brand: 'A Bathing Ape',
        description: 'Relaxed-fit wide-leg shell trousers',
        imageUrl: 'https://images.selfridges.com/is/image/selfridges/R04206413_OLIVEDRAB_M?wid=476&hei=634&fmt=webp&qlt=80,1&bgc=F6F6F6&extend=-18,0,-18,0',
        colour: 'Olive Drab',
        price: {
            retail: '£355',
            rental: {
                3: '£15',
                4: '£20',
                5: '£25',
                6: '£30',
            },
        },
        minimumRentalPeriod: '3 days',
        tags: [
            'relaxedfit',
            'wideleg',
        ]
    },
] satisfies Product[];

const locationsList = [
    'Horsham',
    'Manchester',
    'Liverpool',
    'Birmingham',
    'Stockport',
    'York',
];

// Add product ID's, size, and location to our products.
export const products = productsList.map((product, i) => ({
    id: i + 1,
    size: 'XL',
    location: `${ locationsList[Math.floor(Math.random() * locationsList.length)] }, England, GB`,
    ...product,
}));
