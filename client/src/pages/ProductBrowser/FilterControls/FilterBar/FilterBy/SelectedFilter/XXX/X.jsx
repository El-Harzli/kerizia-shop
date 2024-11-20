import React, { useState } from "react";
import "./X.css";
import Button from '@ui/Button/Button'

function SelectedFilter({ type, isFilterActive, setIsFilterActive }) {
  // States
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [activeSubSubCategory, setActiveSubSubCategory] = useState(null);
  const [subSubCategories, setSubSubCategories] = useState(null);
  const [selectedLeafNodes, setSelectedLeafNodes] = useState(new Set()); // For leaf node selections
  const [allSubCategorySelected, setAllSubCategorySelected] = useState(true);
  const [allCategorySelected, setAllCategorySelected] = useState(true);

  // Categories and subs
  const categories = ["Men", "Women", "Kids"];
  const subcategoriesJson = {
    Men: ["Clothing", "Accessories", "Shoes"],
    Women: ["Clothing", "Shoes", "Bags"],
    Kids: ["Clothing", "Shoes", "Bags", "Accessories"],
  };

  const menSubSubCategories = {
    Clothing: ["Coats", "Denim", "Jackets", "Pants", "Polo", "Shirts", "Sweatshirts", "T-Shirts", "Denim", "Jackets", "Pants", "Polo", "Shirts", "Sweatshirts", "T-Shirts", "Denim", "Jackets", "Pants", "Polo", "Shirts", "Sweatshirts", "T-Shirts", "Denim", "Jackets", "Pants", "Polo", "Shirts", "Sweatshirts", "T-Shirts", "Denim", "Jackets", "Pants", "Polo", "Shirts", "Sweatshirts", "T-Shirts"],
    Accessories: ["Sunglasses", "Hats", "Gloves", "Belts"],
    Shoes: ["Boots", "Boat Shoes", "Brogues", "Derby Shoes", "Loafers", "Sneakers"],
  };

  const womenSubSubCategories = {
    Clothing: ["Dresses", "Tops", "Jackets", "Pants", "Bottoms"],
    Shoes: ["Boots", "Boat Shoes", "Brogues", "Derby Shoes", "Loafers", "Sneakers"],
    Bags: ["Gucci", "Shrek", "Zab"], // Leaf nodes
  };
  const kidsSubSubCategories = {
    Clothing: ["Coats", "Denim", "Jackets", "Pants", "Polo", "Shirts", "Sweatshirts", "T-Shirts"],
    Shoes: ["Boots", "Boat Shoes", "Brogues", "Derby Shoes", "Loafers", "Sneakers"],
    Bags: ["Gucci", "Shrek", "Zab"], // Leaf nodes
    Accessories: ["Sunglasses", "Hats", "Gloves", "Belts"],
  };

  // Helper Functions
  const isLeafNode = (node, subSubCategories) => !subSubCategories[node]?.length;

  const toggleLeafNodeSelection = (leafNode) => {
    setSelectedLeafNodes((prev) => {
      const updated = new Set(prev);
      if (updated.has(leafNode)) {
        updated.delete(leafNode); // Uncheck
      } else {
        updated.add(leafNode); // Check
      }
      setAllSubCategorySelected(updated.size === 0); // Update All SubCategory selection
      setAllCategorySelected(updated.size === 0 && !activeSubCategory); // Update All Category selection when no leaf node is selected
      return updated;
    });
  };

  const toggleActiveCategory = (category) => {
    setActiveSubCategory(null);
    setActiveSubSubCategory(null);
    setSelectedLeafNodes(new Set()); // Reset leaf node selections
    if (activeCategory === category) {
      setActiveCategory(null);
      setSubSubCategories(null);
      setAllCategorySelected(true);
    } else {
      setActiveCategory(category);
      setSubSubCategories(category === "Men" ? menSubSubCategories : category === "Women" ? womenSubSubCategories : kidsSubSubCategories);


      setAllCategorySelected(true);
    }
  };

const toggleActiveSubCategory = (subcategory) => {
  if (isLeafNode(subcategory, subSubCategories)) {
    toggleLeafNodeSelection(subcategory); // Toggle leaf node
  } else {
    setActiveSubSubCategory(null);

    if (activeSubCategory === subcategory) {
      // Collapse subcategory
      setActiveSubCategory(null);

      // Check if no other subcategories or leaf nodes are selected
      const isAnyLeafNodeSelected = selectedLeafNodes.size > 0;
      if (!isAnyLeafNodeSelected) {
        setAllCategorySelected(true); // Re-check "All Men" if no other selections
      }
    } else {
      // Expand subcategory
      setActiveSubCategory(subcategory);
      setAllCategorySelected(false); // Uncheck "All Men" when subcategory is expanded
      setAllSubCategorySelected(true); // Ensure "All [Subcategory]" is checked
    }
  }
};


  const toggleActiveSubSubCategory = (subsubcategory) => {
    if (isLeafNode(subsubcategory, subSubCategories)) {
      toggleLeafNodeSelection(subsubcategory); // Toggle leaf node
    } else {
      if (activeSubSubCategory === subsubcategory) {
        setActiveSubSubCategory(null);
        setAllSubCategorySelected(true); // Re-check "All [Subcategory]" when subsubcategory is collapsed
      } else {
        setActiveSubSubCategory(subsubcategory);
        setAllSubCategorySelected(false); // Uncheck "All [Subcategory]" when subsubcategory is expanded
      }
    }
  };

  const handleAllClick = (level) => {
    if (level === "category") {
      setActiveCategory(null);
      setAllCategorySelected(true);
    } else if (level === "subCategory") {
      setActiveSubCategory(null);
      setAllSubCategorySelected(true);
      // Check if no other subcategories or leaf nodes are selected
      const isAnyLeafNodeSelected = selectedLeafNodes.size > 0;
      if (!isAnyLeafNodeSelected) {
        setAllCategorySelected(true); // Re-check "All Men" if no other selections
      }
    } else if (level === "subSubCategory") {
      setActiveSubSubCategory(null);
      setAllSubCategorySelected(true);
    }
    setSelectedLeafNodes(new Set());
  };

  const selectAllSubCategoryItems = (subcategory) => {
    setSelectedLeafNodes(new Set());
    setAllSubCategorySelected(true);
  };

  const renderSubCategories = (category, subcategories) => (
    <ul className="list">
      <li key={`all-${category}`}>
        <span
          onClick={() => {
            setAllCategorySelected((prev) => !prev);
            if (allCategorySelected) {
              handleAllClick("category"); // Collapse category if "All" is unchecked
            } else {
              selectAllSubCategoryItems(category); // Clear individual selections when "All" is checked
            }
          }}
          className={`list-item ${allCategorySelected ? "active-category" : ""}`}
        >
          <i className={`bx bx-checkbox${allCategorySelected ? "-checked" : ""}`}></i>
          All {category}
        </span>
      </li>
      {subcategories.map((subcategory, index) => (
        <li key={`${subcategory}-${index}`}>
          {isLeafNode(subcategory, subSubCategories) ? (
            <span
              onClick={() => toggleActiveSubCategory(subcategory)}
              className={`list-item ${selectedLeafNodes.has(subcategory) ? "active-category" : ""}`}
            >
              <i className={`bx bx-checkbox${selectedLeafNodes.has(subcategory) ? "-checked" : ""}`}></i>
              {subcategory}
            </span>
          ) : (
            <a
              onClick={() => toggleActiveSubCategory(subcategory)}
              className={`list-item ${activeSubCategory === subcategory ? "active-category" : ""}`}
            >
              {subcategory}
            </a>
          )}
          {activeSubCategory === subcategory && renderSubSubCategories(subcategory, subSubCategories[subcategory] || [])}
        </li>
      ))}
    </ul>
  );

  const renderSubSubCategories = (subcategory, subSubCategoriesList) => (
    <ul className="list">
      <li key={`all-${subcategory}`}>
        <span
          onClick={() => {
            setAllSubCategorySelected((prev) => !prev);
            if (allSubCategorySelected) {
              handleAllClick("subCategory"); // Collapse subcategory if "All" is unchecked
            } else {
              selectAllSubCategoryItems(subcategory); // Clear individual selections when "All" is checked
            }
          }}
          className={`list-item ${allSubCategorySelected ? "active-category" : ""}`}
        >
          <i className={`bx bx-checkbox${allSubCategorySelected ? "-checked" : ""}`}></i>
          All {subcategory}
        </span>
      </li>
      {subSubCategoriesList.map((subsubcategory, index) => (
        <li key={`${subsubcategory}-${index}`}>
          {isLeafNode(subsubcategory, subSubCategories) ? (
            <span
              onClick={() => toggleActiveSubSubCategory(subsubcategory)}
              className={`list-item ${selectedLeafNodes.has(subsubcategory) ? "active-category" : ""}`}
            >
              <i className={`bx bx-checkbox${selectedLeafNodes.has(subsubcategory) ? "-checked" : ""}`}></i>
              {subsubcategory}
            </span>
          ) : (
            <a
              onClick={() => toggleActiveSubSubCategory(subsubcategory)}
              className={`list-item ${activeSubSubCategory === subsubcategory ? "active-category" : ""}`}
            >
              {subsubcategory}
            </a>
          )}
        </li>
      ))}
    </ul>
  );

  const getCategory = () => (
    <ul className="list">
      {categories.map((category, index) => (
        <li className="list-item" key={`${category}-${index}`}>
          <a
            onClick={() => toggleActiveCategory(category)}
            className={`${activeCategory === category ? "active-category" : ""}`}
          >
            {category}
          </a>
          {activeCategory === category && renderSubCategories(category, subcategoriesJson[category] || [])}
        </li>
      ))}
    </ul>
  );

  // JSX Structure
  const filterTypes = {
    Category: <div className="selected-filter__category">{getCategory()}</div>,
    Brand: <div className="selected-filter__brand">{type}</div>,
    Price: <div className="selected-filter__price">{type}</div>,
    Size: <div className="selected-filter__size">{type}</div>,
  };

  const selectedTypeComponent = filterTypes[type] || null;

  return (
    <div className={`selected-filter ${isFilterActive ? "selected-filter--active" : ""}`}>
      <i onClick={() => setIsFilterActive(false)} className="bx bx-x filter-bar__close"></i>
      {selectedTypeComponent}
      <div className="selected-filter__action-btn">
        <Button variant="primary" label="Apply" style={{fontWeight : "500"}} />
      </div>
    </div>
  );
}

export default SelectedFilter;
