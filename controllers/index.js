console.log('Hello cybersoft')

var arrProduct = [
    {id:1, name:'iphone x', price: 1000, img: 'https://picsum.photos/200/300?random=1'},
    {id:2, name:'iphone xs', price: 2000, img: 'https://picsum.photos/200/300?random=2'},
    {id:3, name:'iphone xss', price: 3000, img: 'https://picsum.photos/200/300?random=3'}
]
function renderProduct(){
    var content = '';
    for(var i = 0; i < arrProduct.length; i++){
        let product = arrProduct[i];
        content += `
            <div class = "col-4 mt-2">
                <div class = "card">
                <img src =  "${product.img}" alt="..." />
                    <div class = "card-body">
                        <p>${product.price}</p>
                        <button>Mua hàng</button>
                    </div>
                </div>
            </div>

        `;
    }
    document.querySelector('#arrProduct').innerHTML = content;
}
renderProduct();
   