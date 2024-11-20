import React, { useEffect, useState } from 'react';
import './SelectedFilter.css';

function SelectedFilter({ type, isFilterActive, setIsFilterActive }) {
    const [expandedBranches, setExpandedBranches] = useState({});
    const [selectedCategories, setSelectedCategories] = useState({});

    // Your updated category structure as an array
    const allCategories = [
        {
            name: 'Men',
            children: [
                {
                    name : 'All Men',
                    children : []
                },
                {
                    name: 'Clothing',
                    children: [
                        {
                            name : 'All Clothing',
                            children : []
                        },
                        { name: 'Coats', children: [] },
                        { name: 'Denim', children: [] },
                        {
                            name: 'Jackets',
                            children: [
                                {
                                    name : 'All Jackets',
                                    children : []
                                },
                                { name: 'Blazers', children: [] },
                                { name: 'Bomber Jackets', children: [] },
                                { name: 'Down Jackets', children: [] },
                                { name: 'Lightweight Jackets', children: [] },
                                { name: 'Shirt Jackets', children: [] }
                            ]
                        },
                        { name: 'Pants', children: [] },
                        { name: 'Polo Shirts', children: [] },
                        { name: 'Shirts', children: [] },
                        { name: 'Sweatshirts & Knitwear', children: [] },
                        { name: 'T-Shirts & Vests', children: [] }
                    ]
                },
                {
                    name: 'Accessories',
                    children: [
                        {
                            name : 'All Accessories',
                            children : []
                        },
                        { name: 'Belts', children: [] },
                        { name: 'Gloves', children: [] },
                        { name: 'Hats', children: [] },
                        { name: 'Sunglasses', children: [] }
                    ]
                },
                {
                    name: 'Shoes',
                    children: [
                        {
                            name : 'All Shoes',
                            children : []
                        },
                        { name: 'Boots', children: [] },
                        { name: 'Boat Shoes', children: [] },
                        { name: 'Brogues', children: [] },
                        { name: 'Derby Shoes', children: [] },
                        { name: 'Loafers', children: [] },
                        {
                            name: 'Sneakers',
                            children: [
                                {
                                    name : 'All Sneakers',
                                    children : []
                                },
                                { name: 'Hi-Top', children: [] },
                                { name: 'Low-Tops', children: [] },
                                { name: 'Slip-On', children: [] }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Women',
            children: [
                {
                    name : 'All Women',
                    children : []
                },
                {
                    name: 'Clothing',
                    children: [
                        {
                            name : 'All Clothing',
                            children : []
                        },
                        { name: 'Dresses', children: [] },
                        { name: 'Tops', children: [] },
                        { name: 'Bottoms', children: [] }
                    ]
                },
                { name: 'Shoes', children: [] },
                { name: 'Bags', children: [] }
            ]
        }
    ];

    function handleExpandCollapse(branchPath) {
        setExpandedBranches(prevBranches => ({
            ...prevBranches,
            [branchPath]: !prevBranches[branchPath]
        }));
    }

    function handleCheckboxChange(branchPath, isAll = false) {
        setSelectedCategories(prev => {
            const newSelections = { ...prev };
            // if (isAll) {
            //     const isChecked = !!prev[branchPath];
            //     for (const key in newSelections) {
            //         if (key.startsWith(branchPath)) delete newSelections[key];
            //     }
            //     if (!isChecked) {
            //         newSelections[branchPath] = true;
            //     }
            // } else {
                const parentPath = branchPath.split('/').slice(0, -1).join('/');
                newSelections[branchPath] = !prev[branchPath];
                if (Object.keys(newSelections).some(key => key.startsWith(parentPath))) {
                    delete newSelections[parentPath];
                }
            // }
            return newSelections;
        });
    }

    function traverseCategories(categories, currentBranch = []) {
        return categories.map(category => {
            const branchPath = [...currentBranch, category.name].join('/');
            const isExpanded = !!expandedBranches[branchPath];
            const isChecked = !!selectedCategories[branchPath];

            console.log(branchPath);
            

            if (category.children.length === 0) {
                return (
                    <li
                        key={branchPath}
                        className={`end-category ${isChecked ? 'selected-filter__category-item--active' : ''}`}
                        style={{ paddingBlock: '.5rem' }}
                    >
                        <i
                            onClick={() => handleCheckboxChange(branchPath)}
                            className={isChecked ? 'bx bx-checkbox-checked' : 'bx bx-checkbox'}
                        />
                        {category.name}
                    </li>
                );
            } else {
                return (
                    <li key={branchPath} className="subcategory">
                        <div
                            className={isExpanded ? 'selected-filter__category-item--active' : ''}
                            style={{ paddingBlock: '.5rem' }}
                            onClick={() => handleExpandCollapse(branchPath)}
                        >
                            {category.name}
                            <i className={`bx ${isExpanded ? 'bx-chevron-down' : 'bx-chevron-right'}`}></i>
                        </div>
                        {isExpanded && (
                            <ul>
                                {/* <li
                                    style={{ paddingBlock: '.5rem', display: 'flex', alignItems: 'center' }}
                                    onClick={() => handleCheckboxChange(branchPath, true)}
                                >
                                    <i className={isChecked ? 'bx bx-checkbox-checked' : 'bx bx-checkbox'} />
                                    All {category.name}
                                </li> */}
                                {traverseCategories(category.children, [...currentBranch, category.name])}
                            </ul>
                        )}
                    </li>
                );
            }
        });
    }

    const filterTypes = {
        Category: <div className="selected-filter__category"><ul>{traverseCategories(allCategories)}</ul></div>,
        Brand: <div className="selected-filter__brand">{type}</div>,
        Price: <div className="selected-filter__price">{type}</div>,
        Size: <div className="selected-filter__size">{type}</div>
    };

    const selectedTypeComponent = filterTypes[type] || null;

    return (
        <div className={`selected-filter ${isFilterActive ? 'selected-filter--active' : ''}`}>
            <i onClick={() => setIsFilterActive(false)} className="bx bx-x filter-bar__close"></i>
            {selectedTypeComponent}
        </div>
    );
}

export default SelectedFilter;
