# Schedule_EngAll

원티드 프리온보딩 기업과제 Week-4-2

# 구성원

| 이름   |       팀 구성       |  기능 구현 및 역할   |
| ------ | :-----------------: | :------------------: |
| 이상지 | 팀장 </br> Frontend | React Query API 구현 |
| 김수빈 | 팀원 </br> Frontend |  UI, 일정 추가/확인  |
| 김민주 | 팀원 </br> Frontend |    중복 일정 막기    |

# 기술 스택

`React.js`
`TypeScript`
</br>

`React-Query`
`recoil`
`axois`
`json-server`
`SCSS`
`date-fns`
</br>
</br>

# 폴더구조

```
src
 ┣ api
 ┃ ┗ httpRequest.ts
 ┣ components
 ┃ ┣ layout
 ┃ ┃ ┣ Header.tsx
 ┃ ┃ ┣ Layout.tsx
 ┃ ┃ ┗ Popup.tsx
 ┃ ┗ schedule
 ┃ ┃ ┣ cards
 ┃ ┃ ┃ ┣ Time.tsx
 ┃ ┃ ┃ ┗ Weekdays.tsx
 ┃ ┃ ┣ dropdowns
 ┃ ┃ ┃ ┣ Time.tsx
 ┃ ┃ ┃ ┗ Weekdays.tsx
 ┃ ┃ ┣ form
 ┃ ┃ ┃ ┗ AddForm.tsx
 ┃ ┃ ┗ table
 ┃ ┃ ┃ ┗ ScheduleTable.tsx
 ┣ hooks
 ┃ ┗ useDate.tsx
 ┣ images
 ┃ ┗ icon_arrow_unfold.svg
 ┣ pages
 ┃ ┣ AddClass.tsx
 ┃ ┣ Home.tsx
 ┃ ┣ NotFound404.tsx
 ┃ ┗ ViewClass.tsx
 ┣ router
 ┃ ┗ Routes.tsx
 ┣ static
 ┃ ┗ image
 ┃ ┃ ┗ Logo.svg
 ┣ store
 ┃ ┗ global.ts
 ┣ style
 ┃ ┣ base
 ┃ ┃ ┣ _fonts.scss
 ┃ ┃ ┣ _more.scss
 ┃ ┃ ┗ _reset.scss
 ┃ ┣ constants
 ┃ ┃ ┣ _colors.scss
 ┃ ┃ ┗ _mixin.scss
 ┃ ┣ form.scss
 ┃ ┣ index.js
 ┃ ┣ index.scss
 ┃ ┣ layout.scss
 ┃ ┗ table.scss
 ┣ types
 ┃ ┣ alltypes.d.ts
 ┃ ┣ schedule.d.ts
 ┃ ┣ types.d.ts
 ┃ ┗ user.d.ts
 ┣ utils
 ┃ ┗ getDate.ts
 ┣ index.tsx
 ┗ react-app-env.d.ts
```

</br>

# 실행 방법

```
- mac일 경우
1. git clone https://github.com/Wanted-Pre-Onboarding-Frontend-2/Wan2trip.git
2. cd [folder name]
3. yarn install
4. yarn start
하면 json-server가 같이 실행됩니다.

- window일 경우
1. git clone https://github.com/Wanted-Pre-Onboarding-Frontend-2/Wan2trip.git
2. cd [folder name]
3. yarn install

4. 터미널을 2개로 분할
5. 1번터미널 : yarn start
6. 2번터미널 : cd [folder name]
7. 2번터미널 : yarn server

json-server를 따로 켜주셔야 합니다.
```

</br>

# 상세 구현 설명

## API

- src / index.ts
  - react-query 초기세팅
- httpRequest.ts
  - axios를 사용해 get, post, delete로직 구현
- ScheduleTable.tsx

  - react-query get, delete 구현
  - delete -> useMutation사용

```ts
const queryClient = useQueryClient();

const { data } = useQuery<Schedule[] | any>(['schedule'], () => getSchedule());

const deleteMutation = useMutation((id: number) => deleteSchedule(id), {
  onSuccess: () => {
    queryClient.invalidateQueries(['schedule']);
  },
});
```

## UI

**schedule table**<br>
<img width="1440" alt="table" src="https://user-images.githubusercontent.com/90506668/183299833-be8703ee-dc24-462b-be1e-05b08548cd00.png">

<br>

**form**<br>
<img width="1438" alt="form" src="https://user-images.githubusercontent.com/90506668/183299907-13f7f968-96e2-44dd-8c6c-c7f5baea93af.png">

## 일정 확인

ScheduleTable.tsx

- api에 등록된 데이터를 요일, 시간에 맞게 렌더링되도록 구현

## 일정 추가

AddForm.tsx

- utils/getDate.ts에 입력할 요일, 시, 분, am/pm을 분리하여 파일 생성
- 선택된 요일과 시간을 react-query useMutation 사용하여 추가되도록 구현

```ts
const { mutate } = useMutation(createSchedule, {
  onMutate: (variables) => {
    if (JSON.stringify(data) === JSON.stringify(variables)) {
      setPopupOpen(true);
    } else {
      alert('추가되었습니다.');
      navigate('/view');
    }
  },
  onSuccess: (data) => {
    queryClient.invalidateQueries(['schedule']);
  },
});
```

- 데이터가 성공적으로 추가되면 쿼리 데이터를 새로 받아 올 수 있도록 함(invalidateQueries)
- 일정 등록 후 일정 확인 페이지로 이동하여 추가된 일정을 볼 수 있도록 함

## 일정 추가시 중복 막기

- 선택한 일정과 이미 저장된 일정의 배열값을 가져와 비교 후 중복 일 경우 alret로 일정 추가 막기

  -> 단순 수업 시작시간 비교가 아닌 시작 후 40분간 모든 시간을 중복으로 봐야하므로 중복비교가 안됨 **(리팩토링 필요)**

## 일정 추가 중복 방지 리팩토링(수빈)

- 시간을 숫자로 변경하고 중복된 시간의 수 인지 비교하여 검사하는 로직으로 구현
  -> 자세한 내용은 블로그 글 참고
  <br>
  https://velog.io/@soob1008/TIL-wanted-pre-onboarding-%EC%9D%BC%EC%A0%95-%EB%93%B1%EB%A1%9D-%EC%A4%91%EB%B3%B5-%EB%B0%A9%EC%A7%80

<br>
<br>
