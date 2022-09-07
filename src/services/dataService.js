import axios from "axios";


var catalog = [
    {
        _id: "ink1",
        title: "Juice Box",
        price: 20.00,
        category: "Ink",
        image: "ink1.png",

    },
    {
        _id: "ink2",
        title: "Moza Komoto",
        price: 50.00,
        category: "Ink",
        image: "ink2.png",

    },
    {
        _id: "ink3",
        title: "Blondee",
        price: 750.00,
        category: "Ink",
        image: "ink3.png",

    },
    {
        _id: "ink4",
        title: "Red Surprise",
        price: 750.00,
        category: "Ink",
        image: "ink4.png",

    },
    {
        _id: "ink5",
        title: "Pink SheDevil",
        price: 750.00,
        category: "Ink",
        image: "ink5.png",

    },
    {
        _id: "ink6",
        title: "Red Demon",
        price: 750.00,
        category: "Ink",
        image: "ink6.png",

    },
    {
        _id: "ink7",
        title: "No Bruno",
        price: 750.00,
        category: "Ink",
        image: "ink7.png",

    },
    {
        _id: "ink8",
        title: "Purple Haze",
        price: 750.00,
        category: "Ink",
        image: "ink8.png",

    },
    {
        _id: "ink9",
        title: "Kamoto Goddess",
        price: 750.00,
        category: "Ink",
        image: "ink9.png",

    },
    {
        _id: "pencil1",
        title: "Atlantis",
        price: 100.00,
        category: "Pencil",
        image: "pencil1.png",

    },    
];


class DataService {

    serverUrl = "http://127.0.0.1:5000";

    async getCatalog() {
        let res = await axios.get(this.serverUrl + "/api/catalog");
        return res.data;
            
        //Used to call the server and get a list of products and return.

        //return catalog;   //this returns hard coded catalog above
    }
    
    async saveProduct(prod){
        let res = await axios.post(this.serverUrlL + "/api/catalog", prod);
        return res.data;
    }

    async getCoupons() {
        let res = await axios.get(this.serverUrl + "/api/coupons");
        return res.data;
    }

    async saveCoupon(coupon){
        let res = await axios.post(this.serverUrl + "/api/coupons", coupon);
        return res.data;
    }
}
export default DataService;