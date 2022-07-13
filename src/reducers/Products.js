let initializeState = [
    {
        id : 1,
        name : "پیراهن مردانه زی مدل 153113872",
        brand : "Zi",
        hasDiscount : true,
        discountValue : 235000,
        hasOff : true,
        offValue : 51,
        image  : "/images/products/1.jpg",
        price : 90000
    },
    {
        id : 2,
        name : "پیراهن مردانه ال سی وایکیکی مدل 9SJ537G8-CRP",
        brand : "LC Waikiki",
        hasDiscount : true,
        discountValue : 206000,
        hasOff : true,
        offValue : 30,
        image  : "/images/products/111356841.jpg",
        price : 144000
    },
    {
        id : 3,
        name : "پیراهن جین مردانه - مانگو",
        brand : "Mango",
        hasDiscount : false,
        discountValue : 0,
        hasOff : false,
        offValue : 0,
        image  : "/images/products/105705191.jpg",
        price : 890000
    },
    {
        id : 4,
        name : "پیراهن مردانه فرد کد p.baz.244 ",
        brand : "FRED",
        hasDiscount : true,
        discountValue : 59000,
        hasOff : true,
        offValue : 51,
        image  : "/images/products/113013122.jpg",
        price : 30000
    },

];

export default (state = initializeState, action) => {
    return state;
};