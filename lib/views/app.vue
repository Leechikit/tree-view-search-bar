<script>
import mousetrap from 'mousetrap';

// console.log(mousetrap);

export default {
    data () {
        return {
            test : '123',
        };
    },
    created () {
        console.log('created');
        this.$on('focus', () => {
            console.log('focus');
        });
    },
    destroyed () {
        console.log('destroyed');
    },
}
</script>

<template>
    <div class="app">
        <div class="app-title">app</div>
    </div>
</template>

<style lang="scss" scoped>
    .app {
        background-color: #5f5f5f;
        border-radius: 5px;
        border: 1px solid #f7f7f7;
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9;
    }
    .app-title {
        padding: 0 10px;
        float: left;
    }
</style>