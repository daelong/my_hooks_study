hooks는 functional component에서 state를 가질 수 있게 해줌 : react의 state machine에 연결
앱을 리액트 훅으로 만들면 class component, did mount, render이런거 안해도됨
모든것은 하나의 function이 됨
함수형 프로그래밍으로 다 할수 있음 이게 클래스형 프로그래밍보다 코드를 더 좋게 만들어줌

useState는 value랑 value를 변경하는 방법을 줌
ex) const [count, setCount] = useState(0);
useState는 array를 리턴한다. 첫번째 요소(count)는 value이고 두번째(setCount)는 value를 변경하는 것임

useInput : input을 업데이트한다.
initialValue를 매개변수로 받는다.
...변수 이렇게 적으면 변수안에 있는 모든 것들을 풀어준다.

useEffect는 아주 많은 use를 가지고 있다. componentWillUnmount, componentDidMount, componentWillUpdate와 비슷하다.
useEffect는 componentDidmount의 역할을 해서 새로고침을 하면 useEffect로 실행시킨것을 실행시킨다.
또한 componentDidUpdate의 역할도 하기 때문에 어떤 변화가 생기면 또 useEffect로 실행시킨것을 실행시킨다.
useEffect는 2개의 인자를 받는데 첫번째는 function으로써의 effect이고
두번째 인자는 dependency이다. dependency가 있다면 effect는 dependency리스트에 있는 값일 때만 값이 변하도록 활성화 된다.
빈 dependency는 mount때에만 쓰고 update때는 안쓴다는 뜻
또한 useEffect는 function을 리턴한다.
componentWillUnmount때

reference : 기본적으로 우리의 component의 어떤 부분을 선택할 수 있는 방법(document.getElementByID를 사용한 것과 같음)
react에 있는 모든 component는 reference element를 가지고 있다. -> useRef로 가능
