# MessageBox 弹出提示

---

### 基础用法

定义弹出提示

<w-button @click="success">成功</w-button>
::: demo

```html
<template>
  <w-button @click="success">成功</w-button>
</template>

<script>
  export default {
    methods: {
      success() {
        // 这里设置的是一个弹框提示信息
        this.$message;
      }
    }
  };
</script>
```

:::
