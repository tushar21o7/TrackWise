const myForm = document.querySelector('#myForm');
const btn = document.querySelector('#btn');
const email = document.querySelector('#email');
const price = document.querySelector('#price');
const interval = document.querySelector('#interval');
const item = document.querySelector('#item');
const url = document.querySelector('#url');

const query = location.pathname.split('/')[4];
const productId = location.pathname.split('/')[5];

myForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if(btn.value === 'Tracking') return;

    let track = setInterval(async() => {
        const res = await axios.post(`/api/v1/search/${query}/${productId}`, 
            body = {
                email: email.value,
                price: price.value,
                productURL: url.href,
            }
        )

        if(res.data.msg === "Price dropped") {
            clearInterval(track);
        }

    }, 2000);

    btn.value = 'Tracking';
})

item.addEventListener('click', async () => {
    const res = await axios.post('/api/v1/products', 
        body = {
            query: decodeURI(query),
            productId: productId,
        }
    )
})