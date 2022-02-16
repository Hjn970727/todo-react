/*
 * @Author: your name
 * @Date: 2022-02-16 17:54:23
 * @LastEditTime: 2022-02-16 18:10:10
 * @LastEditors: Please set LastEditors
 * @Description: 入口文件
 * @FilePath: \todo-react\src\index.js
 */
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
// 渲染组件
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
