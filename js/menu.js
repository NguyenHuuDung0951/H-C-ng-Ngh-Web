let products = [
    {
      id: 1,
      name: "Pasta Carbonara",
      image: "/image/PastaCarbonara.jpeg",
      price: 12.64,
      category: "specials",
    },
    {
      id: 2,
      name: "Pasta San Miguel ",
      image: "/image/PastaSan Miguel.webp",
      price: 23,
      category: "specials",
    },
    {
      id: 3,
      name: "Salad Sicilia",
      image: "/image/meals15.jpg",
      price: 31,
      category: "specials",
    },
    {
      id: 4,
      name: "Tiramisu",
      image: "/image/tiramisu.jpeg",
      price: 18,
      category: "specials",
    },
    {
      id: 5,
      name: "Chicken Pot Pie",
      image: "/image/ChickenPotPie.jpeg",
      price: 20,
      category: "lunchDinner",
    },
    {
      id: 6,
      name: "Frito Misto",
      image: "/image/FritoMisto.jpg",
      price: 16.5,
      category: "lunchDinner",
    },
    {
      id: 7,
      name: "Chicken Thighs & Mushroom",
      image: "/image/ChickenMushroom.jpg",
      price: 16,
      category: "lunchDinner",
    },
    {
      id: 8,
      name: "Penne Carbonara",
      image: "/image/PenneCarbonara.jpg",
      price: 17,
      category: "lunchDinner",
    },
    {
      id: 9,
      name: "Three-Cheese Pasta",
      image: "/image/meals24.png",
      price: 18.5,
      category: "lunchDinner",
    },
    {
      id: 10,
      name: "Tomato and Arugula Salad",
      image: "/image/tomato10.jpg",
      price: 18,
      category: "lunchDinner",
    },
    {
      id: 11,
      name: "Duck Confit Poutine",
      image: "/image/duckConfit.jpg",
      price: 24,
      category: ["mainCourses", "lunchDinner"]
    },
    {
      id: 12,
      name: "Creamy Mac and Cheese",
      image: "/image/creamyCheese.jpg",
      price: 22,
      category: "mainCourses",
    },
    {
      id: 13,
      name: "Warm Goat Cheese Salad",
      image: "/image/03mag-Eat-jumbo.webp",
      price: 12,
      category: "mainCourses",
    },
    {
      id: 14,
      name: "Halloumi",
      image: "/image/haulloumi.jpg",
      price: 15,
      category: "mainCourses",
    },
    {
      id: 15,
      name: "Beef Tartare",
      image: "/image/beef.jpg",
      price: 24,
      category: "mainCourses",
    },
    {
      id: 16,
      name: "Mac & Cheese",
      image: "/image/meals23.jpg",
      price: 14,
      category: "mainCourses",
    },
    {
      id: 17,
      name: "Shrimp Tempura",
      image: "/image/ND-shrimp-tempura-fwlg-mediumSquareAt3X.jpg",
      price: 15,
      category: "specialty",
    },
    {
      id: 18,
      name: "Salad Sicilia ",
      image: "/image/salad_silica.jpg",
      price: 31,
      category: "specialty",
    },
    {
      id: 19,
      name: "Pasta San Miguel ",
      image: "/image/pasta-san.jpg",
      price: 23,
      category: "pasta",
    },
    {
      id: 20,
      name: "Tiramisu",
      image: "/image/tiramisu.jpg",
      price: 18,
      category: "specialty",
    },
    {
      id: 21,
      name: "Chicken Pot Pie",
      image: "/image/Chicken-Pot-Pie_2.jpg",
      price: 12,
      category: "risotto",
    },
    {
      id: 22,
      name: "Frito Misto",
      image: "/image/fritto.jpg",
      price: 14,
      category: "seafood",
    },
    {
      id: 23,
      name: "Chicken Thighs & Mushroom",
      image: "/image/chicken-mus.jpg",
      price: 15,
      category: "specialty",
    },
    {
      id: 24,
      name: "Penne Carbonara",
      image: "/image/penne.jpg",
      price: 18,
      category: "risotto",
    },
    {
      id: 25,
      name: "Three-Cheese Pasta",
      image: "/image/three_cheese.jpg",
      price: 25,
      category: "specialty",
    },
    {
      id: 26,
      name: "Tomato and Arugula Salad",
      image: "/image/tomato_salad.jpg",
      price: 17,
      category: "specialty",
    },
    {
      id: 27,
      name: "Duck Confit Poutine",
      image: "/image/duck.jpg",
      price: 24,
      category: "risotto",
    },
    {
      id: 28,
      name: "Creamy Mac and Cheese",
      image: "/image/creamy.jpg",
      price: 20,
      category: "specialty",
    },
    {
      id: 29,
      name: "Warm Goat Cheese Salad",
      image: "/image/goat.jpg",
      price: 16,
      category: "specialty",
    },
    {
      id: 30,
      name: "Halloumi",
      image: "/image/halloumi.jpg",
      price: 35,
      category: "risotto",
    },
    {
      id: 31,
      name: "Beef Tartare",
      image: "/image/beef_tar.jpg",
      price: 25,
      category: "specialty",
    },
    {
      id: 32,
      name: "Chicken A La King",
      image: "/image/chicken_king.jpg",
      price: 25,
      category: "specialty",
    },
    {
      id: 31,
      name: "Dibon Cava Brut Rose",
      image: "/image/dibon.jpg",
      price: 4,
      category: "specialty",
    },
    {
      id: 32,
      name: "Chablis",
      image: "/image/chablis.jpg",
      price: 6,
      category: "specialty",
    },
    {
      id: 33,
      name: "Prosecco",
      image: "/image/prosecco.jpg",
      price: 5,
      category: "specialty",
    },
    {
      id: 34,
      name: "Sancere",
      image: "/image/sancerre.jpg",
      price: 5,
      category: "specialty",
    },
    {
      id: 35,
      name: "Sur Lie Alpino",
      image: "/image/Sur.jpg",
      price: 7,
      category: "specialty",
    },
    {
      id: 36,
      name: "Can Feixes Blanc Selecció",
      image: "/image/can.jpg",
      price: 8,
      category: "specialty",
    },
    {
      id: 37,
      name: "Pouding Chomeur",
      image: "/image/pouding.jpg",
      price: 13,
      category: "specialty",
    },
    {
      id: 38,
      name: "Apple Crumble Pie",
      image: "/image/applepie.jpg",
      price: 8,
      category: "specialty",
    },
    {
      id: 39,
      name: "Cheesecake",
      image: "/image/cheesecake.jpg",
      price: 15,
      category: "specialty",
    },
    {
      id: 40,
      name: "Chocolate Tart",
      image: "/image/choco.jpg",
      price: 15,
      category: "specialty",
    },
    {
      id: 41,
      name: "Lemon Tart",
      image: "/image/lemon.webp",
      price: 8,
      category: "specialty",
    },
    {
      id: 42,
      name: "Creme Brulee",
      image: "/image/champ.jpg",
      price: 15,
      category: "specialty",
    },
  ];

let currentFilter = 'all';

function initApp() {
   displayMenuItems(products);
   setupFilterButtons();
}
// hien thi list product
function displayMenuItems(items) {
    const list = document.querySelector('.list');
    if (!list) return;
    
    list.innerHTML = '';
    
    if (items.length === 0) {
        list.innerHTML = '<div class="no-items">No items found in this category.</div>';
        return;
    }
    
    items.forEach((value) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item'); // them ten clas ="item" 
        newDiv.dataset.category = value.category; // luu thong tin vao category de filter 
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="item-info">
                <div class="title">${value.name}</div>
                <div class="price">$${value.price}</div>
            </div>
            <button onclick="addToCartFromPage(${value.id}, '${value.name}', ${value.price}, '${value.image}')">Add To Cart</button>`;
        list.appendChild(newDiv); // them phan div vao list
    });
}
function addToCartFromPage(id, name, price, image) {
  const product = {
      id: id,
      name: name,
      price: price,
      image: image
  };
  
  if (typeof addToCart === 'function') {
      addToCart(product);
  } else {
      console.log('Adding to cart:', product);
      alert(`Added ${name} to cart!`);
  }  
}
function setupFilterButtons() {
   
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            filterItems(category);
        });
    });
}

function filterItems(category) {
    currentFilter = category;
    
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
   
    let filteredProducts;
    if (category === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(item => item.category === category);
    }
    
    
    displayMenuItems(filteredProducts);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


document.addEventListener('DOMContentLoaded', initApp);


