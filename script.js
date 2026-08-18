fetch("products.json")
    .then(response => response.json())
    .then(products => {

        const productsContainer = document.getElementById("products");

        products.forEach(product => {

            const card = document.createElement("div");

            card.classList.add("product-card");

            card.innerHTML = `
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                >

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p
                    class="product-price"
                    data-product-id="${product.id}"
                >
                    ৳${product.price.toLocaleString()}
                </p>

                <a
                    href="#"
                    class="view-button"
                    data-product-id="${product.id}"
                >
                    View Product
                </a>
            `;

            productsContainer.appendChild(card);
        });

    })
    .catch(error => {

        console.error("Error loading products:", error);

        document.getElementById("products").innerHTML = `
            <p>Failed to load products.</p>
        `;
    });
