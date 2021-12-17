// 🎯 step1 요구사항 - 돔 조작과 이벤트 핸들링으로 메뉴 관리하기

// TODO 메뉴 추가
// - [ ] 에스프레소 메뉴에 새로운 메뉴를 확인 버튼을 눌러 추가한다.
// - [ ] 에스프레소 메뉴에 새로운 메뉴를 엔터키 입력으로 추가한다.
// - [ ] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [ ]추가되는 메뉴의 아래 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입해야 한다.
// - [ ] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// - [ ] 사용자 입력값이 빈 값이라면 추가되지 않는다.

// util 같은 함수
const $ = (selector) => document.querySelector(selector);

function App() {
  // form 태그가 자동으로 전송되는 것을 막아준다.
  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // 메뉴 input 입력값을 받아온다.
  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const $espressM
      console.log($("#espresso-menu-name").value);
    }
  });
}

App();

// TODO 메뉴 수정
// - [ ] 메뉴의 수정 버튼을 눌러 메뉴 이름 수정할 수 있다.
// - [ ] 메뉴 수정시 브라우저에서 제공하는 `prompt` 인터페이스를 활용한다.

// TODO 메뉴 삭제
// - [ ] 메뉴 삭제 버튼을 이용하여 메뉴 삭제할 수 있다.
// - [ ] 메뉴 삭제시 브라우저에서 제공하는 `confirm` 인터페이스를 활용한다.
// - [ ] 총 메뉴 갯수를 count하여 상단에 보여준다.
