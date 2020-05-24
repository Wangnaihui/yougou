//Page Object
import { request } from "../../request/index.js"
Page({
    data: {
        swiperList: [],
        catesList: [],
        floorList: []
    },
    //options(Object)
    onLoad: function(options) {
        // wx.request({
        //     url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
        //     success: (result) => {
        //         this.setData({
        //             swiperList: result.data.message
        //         })
        //     }

        // });
        this.getSwiperList();
        this.getCateList();
        this.getFloorList();
    },
    getSwiperList() {
        request({ url: "/home/swiperdata" })
            .then(result => {
                this.setData({
                    swiperList: result
                })
            })
    },
    getCateList() {
        request({ url: "/home/catitems" })
            .then(result => {
                this.setData({
                    catesList: result
                })
            })
    },
    getFloorList() {
        request({ url: "/home/floordata" })
            .then(result => {
                this.setData({
                    floorList: result
                })
                this.medifyPath();
            })
    },
    medifyPath() {
        let { floorList } = this.data;
        floorList.forEach(v => {
            console.log(1);
            v.product_list.forEach(vc => {
                vc.navigator_url = vc.navigator_url.split('?')[1];
            })
        });
        this.setData({
            floorList
        })
    }
});