<style lang="less" scoped>
    .netease-header {
        width: 100%;
        height: 100%;
        background: #242424;
        border-bottom: 1px solid #000;
        > .container {
            width: 1100px;
            margin-left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            color: #fff;
            line-height: 100%;
            height: 100%;
            > .icon {
                width: 176px;
                height: 100%;
                background: url('../assets/topbar.png') no-repeat 0 9999px;
                background-position: 0 0;
            }
            > .top-bar-item {
                position: relative;
                &.selected {
                    background: #000;
                    > em {
                        font-weight: bold;
                    }
                    > sub {
                        background: url('../assets/topbar.png') no-repeat 0 9999px;
                        background-position: -226px 0;
                    }
                }
                > em {
                    padding: 0 19px;
                    font-style: normal;
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 69px;
                    height: 100%;
                    font-family: Arial, Helvetica, sans-serif;
                }
                > sub {
                    display: block;
                    position: absolute;
                    left: 50%;
                    top: 64px;
                    width: 12px;
                    height: 7px;
                    margin-left: -6px;
                    overflow: hidden;
                }
            }
        }
        
    }
</style>
<template>
    <div class='netease-header'>
        <div class='container'>
            <div class='icon'></div>
            <div
                v-bind:class="{ 'top-bar-item': true, selected: item === selectIndex }" 
                v-for='item in topBar' 
                v-bind:key='item'
                v-on:click="handleItemClick"
            >
                <em>{{item}}</em>
                <sub>&nbsp;</sub>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        console.log(this.activeItem);
        return {
            topBar: ['发现音乐', '我的音乐', '朋友', '商城', '音乐人', '下载客户端'],
            selectIndex: this.activeItem
        };
    },
    props: ['activeItem'],
    watch: {
        activeItem: function(newValue) {
            this.selectIndex = newValue;
        }
    },
    methods: {
        handleItemClick: function(event) {
            event.stopPropagation();
            const value = event.target.innerText;
            this.selectIndex = value;
        }
    }
}
</script>

