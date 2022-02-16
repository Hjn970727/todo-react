/*
 * @Author: your name
 * @Date: 2022-02-16 17:54:23
 * @LastEditTime: 2022-02-16 18:08:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \todo-react\src\App.js
 */
/**
 *  学习目标：Todos 案例
 */
import React from 'react';
import { useSelector } from 'react-redux';
import './styles/base.css';
import './styles/index.css';

export default function App(params) {
  return (
    <section className="todoapp">
      {/* 头部 */}
      <Header></Header>
      {/* 主体 */}
      <Main></Main>
      {/* 底部 */}
      <Footer></Footer>
    </section>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="需要做什么" autoFocus />
    </header>
  );
}

function Main() {
  const { list } = useSelector((state) => state);
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">全选</label>
      <ul className="todo-list">
        {list.map((item) => (
          <li className={item.isDone ? 'completed' : ''} key={item.id}>
            <div className="view">
              <input className="toggle" type="checkbox" checked={item.isDone} />
              <label>{item.task}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>1</strong> 剩余
      </span>
      <ul className="filters">
        <li>
          <a className="all selected" href="#/">
            全部
          </a>
        </li>
        <li>
          <a className="active" href="#/active">
            未完成
          </a>
        </li>
        <li>
          <a className="completed" href="#/completed">
            已完成
          </a>
        </li>
      </ul>
      <button className="clear-completed">清除已完成</button>
    </footer>
  );
}
