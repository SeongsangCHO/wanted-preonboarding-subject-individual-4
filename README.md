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


### ✅ 보완사항

- 수정버튼 클릭시 cursor가 제일 앞으로 위치하는 문제

### 시연영상

![vdo](https://user-images.githubusercontent.com/55486644/131706747-fdfd0928-89ba-4096-b0cc-894c44b380aa.gif)


### 설치 및 테스트

  ```shell
  git clone https://github.com/SeongsangCHO/wanted-preonboarding-subject-individual-4.git todoList
  cd todoList
  npm i
  npm start
  ```


[figma링크](https://www.figma.com/file/9rB3mVYsQJEpWoASfNeIj3/Untitled?node-id=0%3A1)

