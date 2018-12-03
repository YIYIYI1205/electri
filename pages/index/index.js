Page({

  /**
   * 页面的初始数据
   */
  data: {
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