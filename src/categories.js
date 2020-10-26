class Item{
    constructor(id,name,price,image) {
        this.id= id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
const categories={
    hats:[
        new Item(1,"Brown Brim",1100 ,"https://i.ibb.co/ZYW3VTp/brown-brim.png"),
        new Item(2,"Blue Beanie",1200,"https://i.ibb.co/ypkgK0X/blue-beanie.png"),
        new Item(3,"Brown Cowboy",2170,"https://i.ibb.co/QdJwgmp/brown-cowboy.png"),
        new Item(4,"Grey Brim",1750,"https://i.ibb.co/RjBLWxB/grey-brim.png"),
        new Item(5,"Green Beanie",560,"https://i.ibb.co/YTjW3vF/green-beanie.png"),
        new Item(6,"Palm Tree Cap",980,"https://i.ibb.co/rKBDvJX/palm-tree-cap.png"),
        new Item(7,"Red Beanie",560,"https://i.ibb.co/bLB646Z/red-beanie.png"),
        new Item(8,"Wolf Cap",1020,"https://i.ibb.co/1f2nWMM/wolf-cap.png"),
        new Item(9,"Blue Snapback",1190,"https://i.ibb.co/X2VJP2W/blue-snapback.png"),
    ],
    sneakers:[
        new Item(21,"Adidas NMD",3220,"https://i.ibb.co/0s3pdnc/adidas-nmd.png"),
        new Item(22,"Adidas Yeezy",2280,"https://i.ibb.co/dJbG1cT/yeezy.png"),
        new Item(23,"Black Converse",3110,"https://i.ibb.co/bPmVXyP/black-converse.png"),
        new Item(24,"Nike White Airforce",2160,"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png"),
        new Item(25,"Nike Red High Tops",2160,"https://i.ibb.co/QcvzydB/nikes-red.png"),
        new Item(26,"Nike Brown High Tops",4160,"https://i.ibb.co/fMTV342/nike-brown.png"),
        new Item(27,"Air Jordan Limited",1290,"https://i.ibb.co/w4k6Ws9/nike-funky.png"),
        new Item(28,"Timberlands",2200,"https://i.ibb.co/Mhh6wBg/timberlands.png"),
    ],
    jackets : [
        new Item(41,"Black Jean Shearling",3125,"https://i.ibb.co/XzcwL5s/black-shearling.png"),
        new Item(42,"Blue Jean Jacket",5493,"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png"),
        new Item(43,"Grey Jean Jacket",6598,"https://i.ibb.co/N71k1ML/grey-jean-jacket.png"),
        new Item(44,"Brown Shearling",3145,"https://i.ibb.co/s96FpdP/brown-shearling.png"),
        new Item(45,"Tan Trench",12195,"https://i.ibb.co/M6hHc3F/brown-trench.png"),
    ],
    mens:[
        new Item(61,"Camo Down Vest",1232,"https://i.ibb.co/xJS0T3Y/camo-vest.png"),
        new Item(62,"Floral Shirt",1228,"https://i.ibb.co/qMQ75QZ/floral-shirt.png"),
        new Item(63,"BW Long Sleaves",3225,"https://i.ibb.co/55z32tw/long-sleeve.png"),
        new Item(64,"Pink Shirt",4325,"https://i.ibb.co/RvwnBL8/pink-shirt.png"),
        new Item(65,"Jean Long Sleaves",4340,"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png"),
        new Item(66,"Burgundy Shirt",2929,"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png"),
    ],
    womens : [
        new Item(81,"Blue Tank Top",2500,"https://i.ibb.co/7CQVJNm/blue-tank.png"),
        new Item(82,"Floral Blouse",2800,"https://i.ibb.co/4W2DGKm/floral-blouse.png"),
        new Item(83,"Floral Skirt",8200,"https://i.ibb.co/KV18Ysr/floral-skirt.png"),
        new Item(84,"Red Dots Dress",4900,"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png"),
        new Item(85,"Stripped Sweater",3650,"https://i.ibb.co/KmSkMbH/striped-sweater.png"),
        new Item(86,"Yellow Tracksuit",1400,"https://i.ibb.co/v1cvwNf/yellow-track-suit.png"),
        new Item(87,"White Vest",2500,"https://i.ibb.co/qBcrsJg/white-vest.png"),
    ]
};

export default categories;