import p40_img from "./polo_boss_product_1_variant_1.png"
import p41_img from "./polo_boss_product_1_variant_2.png"
import p42_img from "./polo_boss_product_1_variant_3.png"
import p43_img from "./polo_boss_product_1_variant_4.png"

import p44_img from "./polo_boss_product_2_variant_1.png"
import p45_img from "./polo_boss_product_2_variant_2.png"
import p46_img from "./polo_boss_product_2_variant_3.png"
import p47_img from "./polo_boss_product_2_variant_4.png"


import p48_img from "./polo_boss_product_3_variant_1.png"
import p49_img from "./polo_boss_product_3_variant_2.png"
import p50_img from "./polo_boss_product_3_variant_3.png"
import p51_img from "./polo_boss_product_3_variant_4.png"


import p52_img from "./polo_lamartina_product_1_variant_1.png"
import p53_img from "./polo_lamartina_product_1_variant_2.png"
import p54_img from "./polo_lamartina_product_1_variant_3.png"
import p55_img from "./polo_lamartina_product_1_variant_4.png"

import p56_img from "./polo_lamartina_product_2_variant_1.png"
import p57_img from "./polo_lamartina_product_2_variant_2.png"
import p58_img from "./polo_lamartina_product_2_variant_3.png"
import p59_img from "./polo_lamartina_product_2_variant_4.png"


import p60_img from "./Tshirt_lamartina_product_1_variant_1.png"
import p61_img from "./Tshirt_lamartina_product_1_variant_2.png"
import p62_img from "./Tshirt_lamartina_product_1_variant_3.png"
import p63_img from "./Tshirt_lamartina_product_1_variant_4.png"



export let my_products = [
  {
    id : 0,
    name : "Polo Boss off-white",
    category : "men",
    sub_category : "Clothing",
    sub_sub_category : "Polo Shirts",
    brand : "Boss",
    images : {
      image1 : p40_img,
      image2 : p41_img,
      image3 : p42_img,
      image4 : p43_img,
    },
    old_price : 1400,
    new_price : 1200,
    sizes : {
      XS : 0,
      S : 3,
      M : 2,
      L : 0,
      XL : 4,
      XXL : 1,
      XXXL : 0,
    }
  },
  {
    id : 1,
    name : "Polo Boss Black",
    category : "men",
    sub_category : "Polo",
    images : {
      image1 : p44_img,
      image2 : p45_img,
      image3 : p46_img,
      image4 : p47_img,
    },
    brand : "Boss",
    old_price : 1000,
    new_price : 800,
    sizes : {
      XS : 0,
      S : 1,
      M : 1,
      L : 0,
      XL : 1,
      XXL : 0,
      XXXL : 0,
    }
  },
  {
    id : 2,
    name : "Polo Boss Blue",
    category : "men",
    sub_category : "Polo",
    images : {
      image1 : p48_img,
      image2 : p49_img,
      image3 : p50_img,
      image4 : p51_img,
    },
    brand : "Boss",
    old_price : 2500,
    new_price : 1800,
    sizes : {
      XS : 0,
      S : 0,
      M : 1,
      L : 1,
      XL : 1,
      XXL : 0,
      XXXL : 0,
    }
  },
  {
    id : 3,
    name : "Polo La Martina Blue",
    category : "men",
    sub_category : "Polo",
    images : {
      image1 : p52_img,
      image2 : p53_img,
      image3 : p54_img,
      image4 : p55_img,
    },
    brand : "La Martina",
    old_price : 1400,
    new_price : 900,
    sizes : {
      XS : 0,
      S : 0,
      M : 1,
      L : 1,
      XL : 1,
      XXL : 0,
      XXXL : 0,
    }
  },
  {
    id : 4,
    name : "Polo La Martina White",
    category : "men",
    sub_category : "Polo",
    images : {
      image1 : p56_img,
      image2 : p57_img,
      image3 : p58_img,
      image4 : p59_img,
    },
    brand : "La Martina",
    old_price : 1700,
    new_price : 1100,
    sizes : {
      XS : 0,
      S : 0,
      M : 1,
      L : 1,
      XL : 1,
      XXL : 1,
      XXXL : 0,
    }
  },
  {
    id : 5,
    name : "T-shirt La Martina white",
    category : "men",
    sub_category : "T-shirt",
    images : {
      image1 : p60_img,
      image2 : p61_img,
      image3 : p62_img,
      image4 : p63_img,
    },
    brand : "La Martina",
    old_price : 1700,
    new_price : 1100,
    sizes : {
      XS : 0,
      S : 0,
      M : 0,
      L : 0,
      XL : 1,
      XXL : 1,
      XXXL : 0,
    }
  },
  {
    id : 6,
    name : "Polo La Martina White",
    category : "men",
    sub_category : "Polo",
    images : {
      image1 : p56_img,
      image2 : p57_img,
      image3 : p58_img,
      image4 : p59_img,
    },
    brand : "La Martina",
    old_price : 1700,
    new_price : 1100,
    sizes : {
      XS : 0,
      S : 0,
      M : 0,
      L : 0,
      XL : 0,
      XXL : 1,
      XXXL : 0,
    }
  },
  {
    id : 7,
    name : "T-shirt La Martina white",
    sub_category : "T-shirt",
    category : "men",
    images : {
      image1 : p56_img,
      image2 : p57_img,
      image3 : p58_img,
      image4 : p59_img,
    },
    brand : "La Martina",
    old_price : 1700,
    new_price : 1100,
    sizes : {
      XS : 0,
      S : 0,
      M : 0,
      L : 1,
      XL : 1,
      XXL : 1,
      XXXL : 0,
    }
  },

]



const placeholderImage = "https://via.placeholder.com/150";

export let productsData = {
  Men: {
    Clothing: {
      Coats: [
        {
          id: 0,
          name: "Winter Wool Coat",
          brand: "Zara",
          old_price : 1700,
          new_price : 1100,
          sizes: { S: 10, M: 5, L: 2, XL: 1 },
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },
        },
      ],
      Denim: [
        {
          id: 1,
          name: "Slim Fit Jeans",
          brand: "Levis",
          old_price : 1700,
          new_price : 1100,
          sizes: { S: 5, M: 8, L: 3, XL: 0 },
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },        },
      ],
      Jackets: [
        {
          id: 2,
          name: "Leather Jacket",
          brand: "H&M",
          old_price : 1700,
          new_price : 1100,
          sizes: { S: 2, M: 4, L: 6, XL: 3 },
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },        },
      ],
      Pants: [
        {
          id: 3,
          name: "Chinos",
          brand: "Gap",
          old_price : 1700,
          new_price : 1100,
          sizes: { S: 3, M: 3, L: 3, XL: 0 },
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },        },
      ],
      Polo: [
        {
          id: 4,
          name: "Classic Polo Shirt",
          brand: "Ralph Lauren",
          old_price : 1700,
          new_price : 1100,
          sizes: { S: 5, M: 4, L: 2, XL: 1 },
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },        },
      ],
      Shirts: [
        {
          id: 5,
          name: "Casual Checkered Shirt",
          brand: "Tommy Hilfiger",
          old_price : 1700,
          new_price : 1100,
          sizes: { S: 1, M: 2, L: 3, XL: 5 },
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },        },
      ],
    },
    Accessories: [
      {
        id: 6,
        name: "Leather Belt",
        brand: "Gucci",
          d_price : 1700,
          new_price : 1100,
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },      },
    ],
    Shoes: [
      {
        id: 7,
        name: "Running Shoes",
        brand: "Nike",
          d_price : 1700,
          new_price : 1100,
        sizes: { 42: 5, 43: 3, 44: 2 },
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },      },
    ],
  },
  Women: {
    Clothing: {
      Dresses: [
        {
          id: 8,
          name: "Floral Maxi Dress",
          brand: "Forever 21",
          old_price : 1700,
          new_price : 1100,
          sizes: { S: 3, M: 5, L: 2 },
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },        },
      ],
      Tops: [
        {
          id: 9,
          name: "Silk Blouse",
          brand: "Chanel",
          old_price : 1700,
          new_price : 1100,
          sizes: { S: 2, M: 3, L: 1 },
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },        },
      ],
    },
    Shoes: [
      {
        id: 10,
        name: "Heels",
        brand: "Aldo",
          d_price : 1700,
          new_price : 1100,
        sizes: { 38: 3, 39: 4, 40: 2 },
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },      },
    ],
  },
  Kids: {
    Clothing: {
      Jackets: [
        {
          id: 11,
          name: "Puffer Jacket",
          brand: "The Children's Place",
          old_price : 1700,
          new_price : 1100,
          sizes: { S: 2, M: 4, L: 1 },
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },        },
      ],
      TShirts: [
        {
          id: 12,
          name: "Graphic T-Shirt",
          brand: "Uniqlo",
          old_price : 1700,
          new_price : 1100,
          sizes: { S: 10, M: 8, L: 5 },
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },        },
      ],
    },
    Shoes: [
      {
        id: 13,
        name: "Kids' Sneakers",
        brand: "Adidas",
          d_price : 1700,
          new_price : 1100,
        sizes: { 30: 5, 31: 3, 32: 2 },
          images : {
            image1 : placeholderImage,
            image2 : placeholderImage,
            image3 : placeholderImage,
            image4 : placeholderImage,
          },      },
    ],
  },
};




export default my_products;
