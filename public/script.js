document.addEventListener('click', async (e) => {
    const productId = e.target.id;
    const res = await axios.delete(`/api/v1/products/${productId}`);
    location.href = "/api/v1/products";
})

