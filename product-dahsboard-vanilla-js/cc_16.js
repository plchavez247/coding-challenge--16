//Task 2: Fetch Products with .then
const BASE_URL = `https://www.course-api.com/javascript-store-products`
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
            console.log(fetchProductsThen.field.name);
        });
    })
    .catch(error =>{
        console.error('There was a problem getting the product names', error);
    });
}