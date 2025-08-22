fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');
    data.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <h2>${product.name}</h2>
        <p><strong>Mã hàng:</strong> ${product.code}</p>
        <p>${product.description}</p>
        <p><strong>Giá:</strong> ${product.price}</p>
        <p><strong>Tình trạng:</strong> ${product.status}</p>
        <a class="buy-btn" href="mailto:nongtrainhadat@gmail.com?subject=Mua hàng: ${product.name} - ${product.code}">Liên hệ mua</a>
      `;
      productList.appendChild(div);
    });
  })
  .catch(error => console.error('Lỗi khi tải sản phẩm:', error));
