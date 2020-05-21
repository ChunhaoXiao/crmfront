// pages/components/product-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    product: {
      type:Object
    },
    type: {
      type:String,
      default:'add'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectProduct() {
      console.log('triggered');
      this.triggerEvent("productselected", this.data.product);
    }
  }
})
