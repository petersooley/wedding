import Vue from 'vue/dist/vue.esm';

import foo from './foo/Foo.vue';

new Vue({
    el: '#app',
    components: {
        'my-foo': foo,
    },
});