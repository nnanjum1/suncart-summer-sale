export async function getProducts() {
    const res = await fetch(
        "https://suncart-product-json-data.onrender.com/products"
    );

    const data = await res.json();
    return data;
}