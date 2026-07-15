# 자바스크립트&제이쿼리
## 프로젝트 제작 시 항상 준비해야하는 파일, 폴더 순서
1. 프로젝트 **폴더명 영문**으로 의미있게 작성하기
2. `index.html`, `README.md` 생성
3.` styles`, `scripts`, `images` 폴더 생성
4. `scripts/index.js` 생성
## 자바스크립트
### 객체, 속성, 이벤트, 함수
* 객체 : 웹앱에서 사용하는 실제대상(버튼, 링크, 이미지 등), 보통 변수로 데이터(객체)를 저장해서 사용
* 이벤트 : 웹앱을 이용하는 사용자의 행동(클릭, 터치, 드래그 등)
    * `<button onclick="클릭 시 실행되는 함수">`
* 함수 : 2번 이상 반복되는 실행내용
    * 함수 생성과 호출을 각각 다르게 구분함
    * 함수 생성 : `function 함수명(){함수 호출 시 반복 실행할 내용;}` 생성만으론 절대 결과가 실행되지 않음. 반드시 호출 별도로 진행해야함.
    * 함수 호출 : 위 함수생성 바깥쪽에 `함수명()` 작성, 이벤트와 함께 사용하기도 함. `onclick="함수명();"`
### 변수(데이터(객체)를 저장하는 저장소)
* 변수키워드 변수명 대입연산자 대입값
* `let user_name = '홍길동';`
//user_name이란 변수를 생성해서/'홍길동'이라는 데이터를 대입한다.
1. `var` : 오래된 선언방식, 이름 중복 가능
2. `let` : 이름 중복 불가, 재사용 가능
3. `const` : 이름 중복 불가, 재사용 불가
### 객체, 속성, 함수 작성 문법
* 태그 예) `<a href="./index.html"></a>`
* 태그 예) `<video src="./cat.mp4" autoplay>`
* 태그 예) `<link rel="./cat.mp4" href="">`
* `객체.속성;`
    * 객체의 속성 읽기
    * `a.href;`
    * `video.src;`, `video.autoplay;`
    * `span.textContent;` //span태그 안 내용을 읽는다. <span>내용</span>
    * `input.value;` //value는 input 전용속성으로 다른 태그에 사용불가
* `객체.속성 = '값';`
    * 객체의 속성 값을 대입
    * 대입 시 기존값이 있으면 -> 기존값이 자동제거되고 새로운값 대입
    * `a.href = './reset.css'`
    * `video.src = './dog.mp4'`
    * `video.autoplay = '0'`
    * `<span>0</span>` //span의 내용 0을 -> 1로 변경
        * `span.textContent = 1;` //원래 내용 제거하고 1을 span(객체)의 알맹이(속성)에 대입
    * `<input type="text" value="1">` //input의 내용 1->2로 변입
        * `input.value = 2;` //원래 내용 제거하고 2를 새로 대입
* `객체.함수();`
    * 객체를 실행한다
    * `객체.함수() = '값';` (X)
* `이벤트="함수();"`
    * 이벤트 동작 시 특정 함수를 실행한다.
    * `<태그 onclick="func1();">`//함수호출
    * 위 작성 전 준비사항 : `function func1(){반복실행명령}`//함수생성
## DOM(document object) model
### JS에서 제어하고 싶은 HTML요소 있을 경우 순서
1. 제어하고 싶은 HTML 수와 클래스, id 등 확인
2. 용도에 맞게 변수명 생성 `const 변수명`
3. 2번 변수에 대입연산자로 객체 대입하기
    * `document.querySelector('HTML대상');`
    * `const 변수명-document,querySelector('대상');`
4. 안전한 작업을 위해 콘솔로 변수 체크하기
    * `console.log(검사하고싶은변수명);`
    * 콘솔 결과 화면에서 `null` 또는 오류가 있는지 확인
    ## 실제 요소 크기와 관계없는 다양한 디자인 포인트 만드는 방법
    ### CSS의 가상선택자(실제 태그 없이 가상의 요소를 만든다)
    ### after, before 
    * `선택자::after`
    * `선택자::before`
    * 가상선택자의 필수속성 : `content`, `width`, `height`, `position`
    ### 작성예시
    `선택자::after`
        `content:''; display:block;`
        `width:px` `height:px;`
        `position:absolute; left right bottom 등의 위치 자표 추가작성`
        after, before가 적용된 부모 선택자에 `position:relative`
# form태그 관련 요약정리
## form태그와 action, method
* form : 웹사이트에서 회원가입이나 로그인등과 같은 특정 주제 그룹묶는 그룹, 사용자의 입력 데이터를 서버로 전송 하기위해 범위 지정하는 역할
* action : form그룹에 입력된 사용자 데이터를 처리할 서버 URL주소
* method : 데이터를 서버로 전송하는 방식
    * post : 데이터 노출 x 데이터 숨겨서 전송(보안)
    * get : 입력한 데이터 URL 주소 뒤에 붙여서 전송
## input태그와 type
* input : 사용자가 데이터를 입력할 수 있는 다양한 형태의 입력창 만드는 태그
* input 필수속성(type, name, value)
* type(필수속성) : 입력창 종류 선택
## name속성
* action으로 저장된 서버 위치에 사용자가 입력한 데이터를 전송할 때 구분하는 데이터 명칭
* form, input 등 데이터 구분하기 위해 부여하는 이름
* 이름 :tom 아이디 :tom -> `name="userName"` `name="userID"`
## value속성
* 입력양식 : 처음부터 입력된 초기값 (쇼핑몰 최소 기본 수량 1)
* 선택양식 : 위 name처럼 데이터 구분명칭
* 기본값 넣기
## id, class속성
* js, css에서 구분하기 위해 디자인 또는 동작 프로그래밍 용도로 주는 이름