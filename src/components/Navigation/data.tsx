// type ItemProps = {
//     itemName: string,
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
        items: {
            itemName: string
            key: string
        }[]
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
                items: [
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
                        itemName: 'Trainers',
                        key: 'trainers',
                    },
                    {
                        itemName: 'Boots',
                        key: 'boots',
                    },
                ],
            },
            {
                subCategoryName: 'Accessories',
                key: 'accessories',
                items: [
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
                        key: 'caps-hats',
                    },
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
