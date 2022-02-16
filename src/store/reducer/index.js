/*
 * @Author: your name
 * @Date: 2022-02-16 17:58:22
 * @LastEditTime: 2022-02-16 18:04:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \todo-react\src\store\reducer\index.js
 */
const initialState = {
  list: [
    {
      id: 1,
      task: 'React',
      isDone: false,
    },
    {
      id: 2,
      task: 'React2',
      isDone: true,
    },
    {
      id: 3,
      task: 'React3',
      isDone: false,
    },
  ],
  type: 'all',
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
