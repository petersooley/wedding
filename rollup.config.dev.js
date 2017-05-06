import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import vue from 'rollup-plugin-vue';
import replace from 'rollup-plugin-replace';

import livereload from 'rollup-plugin-livereload';

export default {
    entry: 'src/app.js',
    format: 'iife',
    moduleName: 'SooleyApp',
    dest: 'docs/assets/app.js',
    plugins: [
        json(),
        resolve(),
        commonjs(),
        vue({
            compileTemplate: false,
        }),
        buble(), // must be _after_ vue
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        livereload({
            watch: 'docs/assets',
        }),
    ],
};