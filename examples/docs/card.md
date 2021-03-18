# card 卡片

---

### 基础用法

<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>Card name</span>
    <button style="float: right; padding: 3px 0" type="text">Operation button</button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</el-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>

::: demo

```html
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>Card name</span>
    <button style="float: right; padding: 3px 0" type="text">Operation button</button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</el-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
```

:::
