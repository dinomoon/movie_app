# ReactJS로 영화 웹 서비스 만들기

### How does React work?

### Creating your first React component

- component는 html을 반환하는 함수다.
- javascript와 html사이의 조합을 jsx라고 한다.
- component는 반드시 대문자로 시작해야한다.
- react application은 하나의 component만 렌더링 할 수 있다. 그래서 component안에 component를 넣어야 한다.

### Reusable Components with JSX + Props

### Dynamic Component Generation

- map함수

### Protection with PropTypes

- npm i prop-types
- prop의 타입 등등을 미리 적어 놓음으로써 에러를 예방할 수 있다.

### Class Components and State

- 동적으로 데이터를 다루기 위해서는 Prop이 아니라 State를 사용해야한다.
- 그런데 State를 사용하기 위해서는 App을 function이 아니라 class로 사용해야한다.

### All you need to know about State

- State의 값을 변경하려면 setState를 사용해야한다. 그냥 바꾸면 render가 일어나지 않아서 변경이 안된다.
- setState를 부르면 State의 값이 변경되고 다시 render한다.
- react에서 제공하는 current를 이용해 State값을 바꾸는 것이 성능에 좋다.

### Component Life Cycle

- Mounting: constructor(), render(), componentDidMount()
- Updating: ~, render(), componentDidUpdate()
- UnMounting: componentWillUnmount()
