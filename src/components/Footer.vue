<style lang="less" scoped>
// scoped 意思是只作用于这个作用域

    .wrapper {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        background: #242424;
        border-top: 1px solid #d3d3d3;

    }
    .footer-container {
        width: 980px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        // 溢出的东西直接 hidden
        overflow: hidden;

        > .netease-icon {
            // width: 176px;
            height: 69px;
            flex: 0 0 176px;
            background-image: url('../assets/topbar.png');
            background-size: auto; // 按照原生的大小
            background-repeat: no-repeat;
            background-position: 0 0; // x y
        }

        > .list-container {
            flex: 1 1 330px;
            overflow: hidden; // 超过的内容隐藏掉
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            height: 100%;

            > .list-item {
                height: 70px;
                width: 60px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;

                > .icon {
                    height: 45px;
                    width: 50px;
                    background-image: url('../assets/foot_enter_new.png');
                    background-size: 110px 450px;
                    background-repeat: no-repeat;
                }
                > .title {
                    font-size: 12px; // 浏览器最低显示12px
                    color: #fff;
                }
            }
        }
    }
</style>

<template>
    <div class="wrapper">
        <!-- wrapper 做适配， 是外层的一个div， 常用于居中-->
        <div class="footer-container">
            <div class="netease-icon">

            </div>

            <div class="list-container">
                <div class="list-item" v-bind:key="item.title" v-for="item in data">
                    <div class="icon" v-bind:style="{backgroundPosition: item.position}"></div>
                    <div class="title">{{item.title}}</div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    // ES6 语法简写
    data() {
        return {
            data: [
                {
                    title: "用户认证",
                    position: "-63px -101px",
                },
                {
                    title: "独立音乐人",
                    position: "0 0",
                },
                {
                    title: "赞赏",
                    position: "-60px -50px",
                },
                {
                    title: "视频奖励",
                    position: "0 -101px",
                }
            ]
        };
    },
}
</script>
