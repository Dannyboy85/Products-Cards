const products = [
    {
        title: 'product1',
        description: 'bla,bla,bla',
        imageUrl : 'https://pioneerwoman.files.wordpress.com/2016/07/grilled-pizza-40.jpg?w=1200',
        size:'4" x 4"',
        weight: '8 oz. ',
        price1: "$1.99",
        price2: "$1.49",
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product2',
        description: 'bla,bla,bla',
        imageUrl : 'https://pioneerwoman.files.wordpress.com/2016/07/grilled-pizza-40.jpg?w=1200',
        size:'4" x 4"',
        weight: '8 oz. ',
        price1: "$1.99",
        price2: "$1.49",
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product3',
        description: 'bla,bla,bla',
        imageUrl : 'https://pioneerwoman.files.wordpress.com/2016/07/grilled-pizza-40.jpg?w=1200',
        size:'4" x 4"',
        weight: '8 oz. ',
        price1: "$1.99",
        price2: "$1.49",
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product4',
        description: 'bla,bla,bla',
        imageUrl : 'https://pioneerwoman.files.wordpress.com/2016/07/grilled-pizza-40.jpg?w=1200',
        size:'4" x 4"',
        weight: '8 oz. ',
        price1: "$1.99",
        price2: "$1.49",
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product5',
        description: 'bla,bla,bla',
        imageUrl : 'https://pioneerwoman.files.wordpress.com/2016/07/grilled-pizza-40.jpg?w=1200',
        size:'4" x 4"',
        weight: '8 oz. ',
        price1: "$1.99",
        price2: "$1.49",
        price3: '$0.99',
        validUntil: '04/01/2016',
    },
];
//console.log('products',products);

const printToDom =(divId, textToprint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToprint;
 
 }
 
 
 const productBuilder = () => {
    let domString = `<div class= "row">`;
    products.forEach((product) => {
        //domString +=
        domString +=`<div class= "col-4" > ${product.title}</div>`;
 
    })
    domString += '</div>'
    printToDom('products',domString);
}
const Init = () => {
    productBuilder();
}
Init();
    //con sole.log(domString);
 
    
 