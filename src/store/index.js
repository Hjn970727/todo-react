/*
 * @Author: your name
 * @Date: 2022-02-16 17:58:29
 * @LastEditTime: 2022-02-16 18:02:33
 * @LastEditors: Please set LastEditors
 * @Description: store导出js
 * @FilePath: \todo-react\src\store\index.js
 */
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
