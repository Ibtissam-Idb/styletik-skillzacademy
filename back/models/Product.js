const products = [
    {
        "name": "Hoodie",
        "_id": "0acaebac3aa64482a80d465cb1e46c0d",
        "colors": ["Black/Red", "Purple/Grey", "Pink/Green"],
        "price": 43,
        "description": "Proin suscipit metus sem, in tempus sapien bibendum sed. Integer volutpat, augue nec fermentum efficitur, erat lorem dapibus lorem, at tristique neque ligula nec enim.",
        "imageUrl": "hoodie.png",
        "altTxt": "Photo d'un hoodie rouge et noir"
    },
    {
        "name": "Pull",
        "_id": "0cc7c067534247918ef6d3fb8a3316b7",
        "colors": ["Blue/White", "Black/Green", "Yellow/Blue"],
        "price": 27,
        "description": "Ut ut arcu mattis, condimentum metus eu, auctor turpis. Ut feugiat, ligula quis dapibus dapibus, ex risus auctor velit, ut elementum purus ipsum vitae urna.",
        "imageUrl": "pull.png",
        "altTxt": "Photo d'un pull blanc et bleu"
    },
    {
        "name": "Chaussures",
        "_id": "0578265753e74299844e15d8a5b14d42",
        "colors": ["Yellow", "Black", "Grey"],
        "price": 32,
        "description": "Praesent accumsan eget elit ut dictum. Cras blandit arcu viverra arcu pulvinar venenatis. Sed consequat sit amet tellus sit amet pharetra.",
        "imageUrl": "shoe.png",
        "altTxt": "Photo d'une chaussure jaune"
    },
    {
        "name": "T-shirt",
        "_id": "193fad49fe764daeafff6b4068e0f046",
        "colors": ["Purple", "Green", "Orange"],
        "price": 21,
        "description": "Integer quis finibus odio. Sed eget nibh dapibus, lobortis tellus sit amet, porta odio. Sed blandit, turpis eget cursus hendrerit, orci nisl hendrerit lacus, sed tempus massa tellus posuere est.",
        "imageUrl": "tshirt.png",
        "altTxt": "Photo d'un t-shirt violet"
    }
];

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(products))));
}

exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find(product => product._id === id);
        if (product) {
            resolve(JSON.parse(JSON.stringify(product)));
        } else {
            reject(`Produit avec l'ID ${id} non trouvé.`);
        }
    });
}