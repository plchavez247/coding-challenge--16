//Task 2: Fetch Products with .then
const BASE_URL = 'https://www.course-api.com/javascript-store-products'
function fetchProductsThen(){
    return fetch(BASE_URL)//using .fetch to get product data
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ERROR: ${response.status}`);
        }
        return response.json();//using then to give error if response is not ok
    })
    .then(data=> {
        data.forEach(data => {
            console.log(product.field.name);
        });//using .then to log the product name to the console
    })
    .catch(error =>{
        console.error('There was a problem getting the product names', error);
    });//using .catch to log the errors
}

//Task 3: Fetch products with async/await
async function fetchProductAsync(){
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products')
        if (!response.ok){
            throw new Error('Failed to fetch product data')
        }
        const products = await response.json();
        displayProducts(products);
    } catch (error){
        handleError(error)
    }
}