class Product {
  title = 'DEFAULT';
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price
  }
}

console.log(new Product());

const productsList = {
  products: [
    new Product('A pillow', 'https://photos1.blogger.com/blogger/1269/603/1600/feather%20pillow.jpg', 'A soft pillow', 19.99)
    {
      title: 'A Pillow',
      imageUrl: 'https://photos1.blogger.com/blogger/1269/603/1600/feather%20pillow.jpg',
      price: 19.99,
      description: 'A soft pillow!'
    },
    {
      title: 'A Carpet',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0PQfr9px6c7SF4yk6eBOnVH5QUrxqPsC9TQ&usqp=CAU',
      price: 89.99,
      description: 'A carpet which  you might like - or not.'
    }
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productsList.render()

