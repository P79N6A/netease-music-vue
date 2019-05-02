<style lang="less" scoped>
    .netease-footer {
        width: 100%;
        height: 100%;
        border-top: 1px solid #d3d3d3;
        background: #f2f2f2;
        color: #333;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        > .icon-container {
            height: 70px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 330px;
            > .item {
                width: 60px;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                > .item-icon {
                    background: url('../assets/foot_enter_new.png') no-repeat;
                    width: 50px;
                    height: 45px;
                    background-size: 110px 450px;
                }
                > .item-name {
                    color: #999;
                    font-size: 12px;
                }
            }
        }
    }
</style>
<template>
    <div class='netease-footer'>
        <div class='icon-container'>
            <div v-bind:key="item.title" class='item' v-for="item in data">
                <div class='item-icon' v-bind:style="{ backgroundPosition: item.position }" />
                <span class='item-name' >{{item.title}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { title: '用户认证', position: '-63px -101px' },
                { title: '独立音乐人', position: '0 0' },
                { title: '赞赏', position: '-60px -50px' },
                { title: '视频奖励', position: '0 -101px' }
            ]
        };
    }
}
</script>
