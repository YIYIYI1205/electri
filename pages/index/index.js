Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgheights:0,
    inputShowed: false,
    inputVal: "",
    commonUse1:[
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"}
    
    ],
    commonUse2:[
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"}
    ],
    commonUse3:[
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"}
    ],
    commonUse4:[
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"},
    {name:"110电阻色环",describe:"电阻色环定义方式表格及...",img:"../../images/index.png"}
    ]
  },  
    onLoad:function(){
        var _this=this;
        var query = wx.createSelectorQuery();
        var height=0;
        query.select('.content').boundingClientRect();
        query.exec(function (res) {
          //res就是 所有标签为mjltest的元素的信息 的数组
          console.log(res);
          //取高度
          console.log(res[0].height);
          var height=res[0].height*2+40
          _this.setData({imgheights:height})
        })
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    }
})