# Today's Recipe

<img width="800" alt="pium_001" src="https://github.com/learning-mates/Today_Recipe/assets/96277798/add4ed54-fbef-4e6e-95df-660546a88a47">

### [🔗 배포 링크](https://learning-mates.github.io/Today_Recipe/)
<pre>
<strong>Today's Recipe는 레시피 추천 및 검색 웹 사이트 입니다.</strong>
</pre>

<br />

## 👩‍💻 팀원

| 이름 | 포지션 | GitHub |
| --- | --- | --- |
| 유미정 | 프론트엔드 | https://github.com/ymj0828 |
| 양희광 | 프론트엔드 | https://github.com/YangHK95 |

<br />

## 💻 주요 기능
- **메뉴, 재료 검색** : 메뉴 또는 재료를 검색하면 그에 맞는 레시피들을 불러옴
- **메뉴 추천** : 매일 매일 추천하는 메뉴가 바뀜
- **메뉴명 전달** : 레시피를 클릭하면 레시피의 상세보기가 나옴
- **레시피 상세보기** : 메뉴의 종류, 재료, 영양정보, 레시피, 저감조리법을 알려줌
- **배포** : GitHub.io로 배포

<br />

## 📝 페이지 코드 설명

|메인|서브|
|:----:|:----:|
|<img src='https://user-images.githubusercontent.com/96277798/265259551-dc35bbff-3b0c-4fce-a119-7fae47bb2f8e.png' width="400" />|<img src='https://user-images.githubusercontent.com/96277798/265259562-c7a0d33a-43b3-427a-96ab-36dfb3884914.png' width="400"/>|

<pre>
<strong> 메인 </strong>

- async, await, fetch를 사용하여 api를 불러와 json으로 변환
- 페이지 로드 시 6개만 데이터를 가져옴
- 검색을 하면 input의 value값을 api 요청인자에 넣고 해당 데이터를 가져옴
- forEach를 사용하여 가져온 데이터 수만큼 요소를 생성하여 화면에 나타나게 함
- 레시피를 클릭하면 레시피명을 이동할 주소 뒤에 넣고 해당 주소로 이동함


<strong> 서브 </strong>

- 주소를 디코딩하고 레시피명만 추출하여 api 요청인자에 넣고 해당 데이터를 가져옴 
- 가져온 데이터의 순서가 뒤죽박죽이고 빈 데이터도 있어서
  if문과 정규식으로 조건에 맞게 데이터를 가공해 배열에 넣고 정렬함
- 가공한 데이터를 해당 요소에 innerText를 사용해 화면에 나타나게 함
</pre>

<br />

## 🛠 기술 스택
#### • 개발언어
<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&Color=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/>

#### • 협업
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/> 

#### • 서비스 배포
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<br />

## 🗓️ 진행기간
#### 2023년 7월 14일 ~ 26일 (약 2주)

<br />

<!-- ## 💭 작업회고 -->

<!-- #### [👉 유미정의 작업회고](https://lumimi.tistory.com/25) -->

<p align="right"><a href="#todays-recipe">(🔼 Top)</a></p>

<br />