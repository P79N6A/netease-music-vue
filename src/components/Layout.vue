<style lang="less" scoped>
.netease-layout {
    width: 100%;
    height: 100vh;
    background: #f5f5f5;
    > .header {
        position: relative;
        z-index: 1000;
        height: 69px;
        box-sizing: border-box;  
        width: 100%;
    }
    > .content {
        width: 900px;
        box-sizing: border-box;
        // margin-left: 50%;
        // transform: translateX(-50%);
        margin: 0 auto;
        height: calc(100vh - 140px);
        background-color: #fff;
        border: 1px solid #d3d3d3;
        border-width: 0 1px;
    }
    > .footer {
        position: relative;
        height: 69px;
        overflow: hidden;
        
    }
}
</style>

<template>
    <div class='netease-layout'>
        <div class='header'>
            <slot name='header'>
                <Header />
            </slot>
        </div>
        <div class='content'>
            <slot name='content'></slot>
        </div>
        <div class="footer">
            <slot name='footer'>
                <Footer />
            </slot>
        </div>
    </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
    name: 'Layout',
    data() {
        return {}
    },
    components: {
        Header,
        Footer
    }
}
</script>
