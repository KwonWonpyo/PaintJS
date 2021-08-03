# Paint.js
## HTML/CSS/JavaScript를 이용한 웹 그림판 만들기

본 프로젝트는 노마드 코더의 <[바닐라 JS로 그림판 만들기](https://nomadcoders.co/javascript-for-beginners-2)> 인터넷 무료 강좌 내용을 바탕으로 확장하여 만든 웹 그림판입니다.
제가 만든 그림판 웹사이트는 `GitHub Pages`를 통해 배포중입니다. 

- 결과물 미리보기 : [https://kwonwonpyo.github.io/PaintJS/](https://kwonwonpyo.github.io/PaintJS/)

### 강좌 이후 추가된 내용

- 펜 굵기 스크롤 양쪽에 이미지 추가
- PNG, JPG 포맷 지정하여 저장하기
- 브러쉬와 채우기 버튼 분리, 활성화 된 모드 하이라이트 적용

### 추가 고려중인 내용

- 지우개 기능 추가
- 모드에 따라 마우스 커서 아이콘 변경 기능
- 되돌리기 및 다시 적용하기
- 더 많은 색상 제공하기
- 모바일 환경 최적화

### 패치 노트

- 2021.07.26 강좌 수강 완료 
> 마우스로 그림 그리기\
> 색깔 눌러 색 바꾸기\
> PAINT 모드와 FILL 모드 전환하기\
> SAVE 버튼으로 PNG 파일 저장하기

- 2021.07.27 한글화 패치
> 영어 대신 한글 적용. 구글 폰트 2종 적용(고운 바탕, Noto Sans KR)\
> PNG / JPG 저장 버튼 분리\
> 브러쉬와 채우기 버튼 분리, 활성화 된 모드 하이라이트 적용\
> 펜 굵기 조절 스크롤 양쪽에 이미지 추가(그림판 3D로 직접 만듬)\
> 기타 UI 변화 및 코드 최적화 진행

- 2021.07.27 마우스 포인터 제작
> 캔버스 사이즈 조정 700 -> 500 px\
> 현재 메뉴에 따라 마우스 포인터 변경

- 2021.08.03 색상 변경 기능 추가
> `Spectrum` 오픈소스 라이브러리를 이용하여 색상 변경 기능 추가\

### 참고 사이트

- 노마드 코더의 [바닐라 JS로 그림판 만들기](https://nomadcoders.co/javascript-for-beginners-2)
- [Spectrum](https://github.com/seballot/spectrum)
