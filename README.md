# 페이위크 기업과제 🧑‍💻 [배포주소](https://paywork-todolist.netlify.app/)


<br/>

기간 : 21.08.30 ~ 21.09.02



<br/>

##  🕧 서버 주소를 이용하여 TodoList 구현
<br/>

### ✅  요구사항
<br/>
- ts+react 웹 사이트 혹은 react-native 앱 개발 (react-native도 ts 가능)

- function 단위로 주석 설명

- [x] [POST]todo생성 : Todo만들기

  <details>
  <summary>API명세</summary>
  <div markdown="1">       



  POST 생성

  URL

  ```jsx
  ../todo
  ```

  request

  ```json
  {
  	"content": "string"
  }
  ```

  response (200)

  ```json
  {
  	"msg": "string"
  }
  ```

  </div>
  </details>

  

- [x] [GET]todo불러오기 : Todo 조회

  <details>
  <summary>API명세</summary>
  <div markdown="1">       



  GET 리스트 불러오기

  URL

  ```jsx
  ../todo
  ```

  request

  ```json
  { }
  ```

  response (200)

  ```json
  {
    "count": 2, //integer
    "todoList": [
        {
            "id": "string",
            "content": "string",
            "isCheck": true, //boolean
            "createdAt": "2021-05-26T11:51:05.097Z"
        },
        {
            "id": "string",
            "content": "string",
            "isCheck": false, //boolean
            "createdAt": "2021-05-26T16:15:25.729Z"
        }
    ]
  }
  ```

  </div>
  </details>



- [x] [POST]todo수정 : Todo 수정

  <details>
  <summary>API명세</summary>
  <div markdown="1">       



  POST 수정

  URL

  ```jsx
  ../todo/:id
  ```

  request

  ```json
  {
  	"content": "string"
  }
  ```

  response (200)

  ```json
  {
  	"msg": "string",
    "content": "string"
  }
  ```

  </div>
  </details>


- [x] [POST]todo체크(완료여부)

  <details>
  <summary>API명세</summary>
  <div markdown="1">       



  POST 체크

  URL

  ```jsx
  ../todo/:id
  ```

  request

  ```json
  {
  	"isCheck": true //boolean
  }
  ```

  response (200)

  ```json
  {
  	"msg": "string"
  }
  ```

  </div>
  </details>
  
 
 
 
- [x] [POST]todo삭제

  <details>
  <summary>API명세</summary>
  <div markdown="1">       



  POST 삭제

  URL

  ```jsx
  ../todo/:id
  ```

  request

  ```json
  {
  	
  }
  ```

  response (200)

  ```json
  {
  	"msg": "string"
  }
  ```

  </div>
  </details>



### 💻 구현환경 및 라이브러리

환경
- typescript
- react-create-app

상태관리
- redux
- redux-saga

라이브러리
- react-datepicker
- moment
- styled-reset
- styled-components


### 👉 구현사항[개인]

- redux를 사용한 TodoList 전역 상태관리
- redux-saga를 사용해 localStorage와 동기통신 (해당 프로젝트에서 서버 미제공)[관련 코드](https://github.com/SeongsangCHO/wanted-preonboarding-subject-individual-4/tree/develop/src/utils/backend)
- TodoList 조회, 추가, 삭제, 수정, 필터링, 검색기능 구현
- createPortal를 사용한 모달구현
- 페이지 마크업 및 스타일링



### 시연영상

![vdo](https://user-images.githubusercontent.com/55486644/131706747-fdfd0928-89ba-4096-b0cc-894c44b380aa.gif)


### 설치 및 테스트

  ```shell
  git clone https://github.com/SeongsangCHO/wanted-preonboarding-subject-individual-4.git todoList
  cd todoList
  npm i
  npm start
  ```


### ✅ 수정이 필요하다고 생각되는 부분

- [ ] 수정버튼 클릭시 cursor가 제일 앞으로 위치하는 문제가 있음
현재 클릭시 contentEditable의 속성을 사용하고 있어서 발생하는 이슈
수정버튼을 클릭하기 전엔 span으로 랜더링시키고 수정버튼 클릭시 input창으로 조건부랜더링하여 해당 이슈를 회피할 수 있을 것 같음

초기에 해당 이슈 파악하지 못해 [관련 해결방법](https://stackoverflow.com/questions/6249095/how-to-set-caretcursor-position-in-contenteditable-element-div/41034697), [방법2](https://stackoverflow.com/questions/25073250/positioning-caret-in-contenteditable-reactjs-components?lq=1)을 참고. 전역객체에 접근하는 방법보다 조건부랜더링의 방법이 리액트에서 구현하기 쉽다고 생각됨

- [ ] 모달의 dim 클릭시 모달 종료되도록 해야함. dim에 onClick이벤트 추가 후 클릭시 dispatch(closeModal())요청 보내면 해결할 수 있을 것 같음.

[figma링크](https://www.figma.com/file/9rB3mVYsQJEpWoASfNeIj3/Untitled?node-id=0%3A1)

