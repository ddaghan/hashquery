// rollup.config.js
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './src/hashquery.ts',
  moduleName: 'hashquery',
  sourceMap: true,
  plugins: [
    typescript(),
    uglify()
  ],
  targets: [
    { dest: 'hashquery.amd.js', format: 'amd' },
    { dest: 'hashquery.cjs.js', format: 'cjs' },
    { dest: 'hashquery.iife.js', format: 'iife' },
    { dest: 'hashquery.umd.js', format: 'umd' },
  ]
}