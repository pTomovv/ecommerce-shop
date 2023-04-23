// type ItemProps = {
//     itemName: string
//     key: string
// }

// type SubMenuProps = {
//     subCategoryName: string,
//     key: string,
//     items: ItemProps[]
// }

type MenuDataProps = {
    categoryName: string
    key: string
    subCategories: {
        subCategoryName: string
        key: string
        firstList: [
            {
                listHeading: string
                key: string
            },
            {
                itemName: string
                key: string
            }[]
        ]
        secondList: [
            {
                listHeading: string
                key: string
            },
            {
                itemName: string
                key: string
            }[]
        ]
        thirdList: [
            {
                listHeading: string
                key: string
            },
            {
                itemName: string
                key: string
            }[]
        ]
    }[]
}

export const menuData: MenuDataProps[] = [
    {
        categoryName: 'MEN',
        key: 'men',
        subCategories: [
            {
                subCategoryName: 'Clothing',
                key: 'clothing',
                firstList: [
                    {
                        listHeading: 'shop by product',
                        key: 'shop-by-product',
                    },
                    [
                        {
                            itemName: 'T-shirts & Vests',
                            key: 't-shirts-vests',
                        },
                        {
                            itemName: 'Shirts',
                            key: 'shirts',
                        },
                        {
                            itemName: 'Shorts',
                            key: 'shorts',
                        },
                    ],
                ],
                secondList: [
                    {
                        listHeading: 'brand favourites',
                        key: 'brand-favourites',
                    },
                    [
                        {
                            itemName: 'Bershka',
                            key: 'bershka',
                        },
                        {
                            itemName: 'Carhartt WIP',
                            key: 'carhartt-wip',
                        },
                        {
                            itemName: 'COLLUSION',
                            key: 'collusion',
                        },
                    ],
                ],
                thirdList: [
                    {
                        listHeading: 'shop by edit',
                        key: 'shop-by-edit',
                    },
                    [
                        {
                            itemName: 'Holiday',
                            key: 'holiday',
                        },
                        {
                            itemName: 'ASOS Basics',
                            key: 'asos-basics',
                        },
                        {
                            itemName: 'Festival',
                            key: 'festival',
                        },
                    ],
                ],
            },
            {
                subCategoryName: 'Shoes',
                key: 'shoes',
                firstList: [
                    {
                        listHeading: 'shop by product',
                        key: 'shop-by-product',
                    },
                    [
                        {
                            itemName: 'View All',
                            key: 'view-all',
                        },
                        {
                            itemName: 'Trainers',
                            key: 'trainers',
                        },
                        {
                            itemName: 'Boots',
                            key: 'boots',
                        },
                    ],
                ],
                secondList: [
                    {
                        listHeading: 'shop by brand',
                        key: 'shop by brand',
                    },
                    [
                        {
                            itemName: 'ASOS DESIGN',
                            key: 'asos-design',
                        },
                        {
                            itemName: 'New Balance',
                            key: 'new-balance',
                        },
                        {
                            itemName: 'Nike',
                            key: 'nike',
                        },
                    ],
                ],
                thirdList: [
                    {
                        listHeading: 'shop by trainer style',
                        key: 'shop by trainer style',
                    },
                    [
                        {
                            itemName: 'adidas Stan Smith',
                            key: 'adidas-stan-smith',
                        },
                        {
                            itemName: 'Nike Air Max',
                            key: 'nike-air-max',
                        },
                        {
                            itemName: 'New Balance 574',
                            key: 'new-balance-574',
                        },
                    ],
                ],
            },
            {
                subCategoryName: 'Accessories',
                key: 'accessories',
                firstList: [
                    {
                        listHeading: 'shop by product',
                        key: 'shop-by-product',
                    },
                    [
                        {
                            itemName: 'View All',
                            key: 'view-all',
                        },
                        {
                            itemName: 'Beanies',
                            key: 'beanies',
                        },
                        {
                            itemName: 'Caps & Hats',
                            key: 'caps-and-hats',
                        },
                    ],
                ],
                secondList: [
                    {
                        listHeading: 'shop by jewellery',
                        key: 'shop-by-jewellery',
                    },
                    [
                        {
                            itemName: 'View All',
                            key: 'view-all',
                        },
                        {
                            itemName: 'Necklaces',
                            key: 'necklaces',
                        },
                        {
                            itemName: 'Rings',
                            key: 'rings',
                        },
                    ],
                ],
                thirdList: [
                    {
                        listHeading: 'shop by bag',
                        key: 'shop by bag',
                    },
                    [
                        {
                            itemName: 'View All',
                            key: 'view-all',
                        },
                        {
                            itemName: 'Duffle Bags',
                            key: 'duffle-bags',
                        },
                        {
                            itemName: 'Bum Bags',
                            key: 'bum-bags',
                        },
                    ],
                ],
            },
        ],
    },
    {
        categoryName: 'WOMEN',
        key: 'women',
        subCategories: [
            {
                subCategoryName: 'Clothing',
                key: 'clothing',
                items: [
                    {
                        itemName: 'Dresses',
                        key: 'dresses',
                    },
                    {
                        itemName: 'Skirts',
                        key: 'skirts',
                    },
                    {
                        itemName: 'Shorts',
                        key: 'shorts',
                    },
                ],
            },
            {
                subCategoryName: 'Dresses',
                key: 'dresses',
                items: [
                    {
                        itemName: 'View All',
                        key: 'view-all',
                    },
                    {
                        itemName: 'Evening Dresses',
                        key: 'evening-dresses',
                    },
                    {
                        itemName: 'Day Dresses',
                        key: 'day-dresses',
                    },
                ],
            },
            {
                subCategoryName: 'Shoes',
                key: 'shoes',
                items: [
                    {
                        itemName: 'View All',
                        key: 'view-all',
                    },
                    {
                        itemName: 'Boots',
                        key: 'boots',
                    },
                    {
                        itemName: 'Heels',
                        key: 'heels',
                    },
                ],
            },
        ],
    },
]
