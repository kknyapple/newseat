# NEWSEAT

## 목차
[1. 프로젝트 소개](#프로젝트-소개)

[2. 사용 예제](#사용-예제)
- 유튜브 영상으로 채널 별 뉴스 시청
- 카테고리 별 인터넷 기사 확인

[3. Issue](#issue)
- youtube api #4
- react-query #7, #8


## ✨프로젝트 소개

> 최근 뉴스와 기사를 보여주는 웹사이트

youtube api와 newsapi를 이용해 최근 뉴스를 보여줍니다. 평소 뉴스를 검색하기 귀찮음에서 시작된 프로젝트입니다.

## 📄사용 예제

### 1️. 유튜브 영상으로 채널 별 뉴스 시청 (kbs, sbs, mbc, jtbc, ytn, 채널a)
![유뷰브영상](https://user-images.githubusercontent.com/72698829/225744003-d5bcb27e-6345-40f6-b6c7-a020e4f5a7d7.gif)
kbs, sbs, mbc, jtbc, ytn, 채널a 채널에서 동영상을 클릭하면 youtube 동영상을 재생하고 확인할 수 있습니다. (메뉴 마다 최근 24개 확인 )

### 2️. 카테고리 별 인터넷 기사 확인
![기사카테고리](https://user-images.githubusercontent.com/72698829/225738793-05dac1bd-ff83-465b-bc44-5375629024cd.gif)
카테고리 별로 기사를 클릭 시 인터넷 기사를 확인할 수 있습니다.

## 💥Issue
### 1. 스타일 적용 (02/25)

- globalStyle, 구글 폰트 적용 (폰트, 색상)
    
    ```jsx
    const GlobalStyle = createGlobalStyle`
      body {
        background-color: ${(props) => props.theme.color.white};
        color:${(props) => props.theme.color.black};
        margin: 0;
        padding: 0;
        font-family: 'IBM Plex Sans KR', sans-serif;
        }
    `;
    ```
    
- theme 적용 (색상)
    
    ```jsx
    const theme = {
      color: {
        main: "#FA9370",
        white: "#FCFCFC",
        lightGray: "#F5F5F5",
        gray: "#A7A7A7",
        black: "#131313",
      },
    };
    ```
    
- App.js
    
    ```jsx
    <ThemeProvider theme={theme}>
       <GlobalStyle />
       <Routes>
       </Routes>
    </ThemeProvider>
    ```
    

### 2. 페이지 이동 시 스크롤 맨 위로 올리기 (02/25)

- ScrollToTop.js
    
    ```jsx
    import { useEffect } from "react";
    import { useLocation } from "react-router-dom";
    
    export default function ScrollToTop() {
      const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
      return null;
    }
    ```
    
- index.js
    
    ```jsx
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <RecoilRoot>
          <BrowserRouter>
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </RecoilRoot>
      </React.StrictMode>
    );
    ```
    

### 3. title 특정 글자 수 이상 자르기

- substr()
    
    ```jsx
    				{title.length < 60 ? (
              <Title>{title}</Title>
            ) : (
              <Title>{title.substr(0, 55)}...</Title>
            )}
    ```
    

### 4. 유튜브 api (02/26)

- postman
- Channel Id
    - kbs: ***
    - sbs: ***
    - mbc: ***
    - jtbc: ***
    - ytn: ***
    - 채널a: ***
    
- 유튜브 특정 채널 playlist 가져오기 → playlist/list
    - youtube api에서 search 기능은 cost가 높기 때문에 불가능
    - 먼저, 특정 채널 playlist를 가져오기 위해서는 channel id가 필요함 → video/list
    - 최근 영상 목록 가져오기 → playlistItem/list
        
- 동영상 재생 시간 가져오기 → playlist/list, videos/list
    
    ```jsx
    		const [videoId, setVideoId] = useState([]);
    		
    		// id만 저장하기
    		axios.get(`url`)
            .then((res) => {
              let copy = [];
    
              res.data.items.forEach((item) => {
                copy.push(item.snippet.resourceId.videoId)    
              });
    
    					setVideoId(copy);
              copy = [];
            })
            .catch(() => {
              console.log("fail");
            });
        }
    
    		// id로 동영상 정보 불러오기
    		let id = videoId.join(",");
        axios
          .get(`url`)
          .then((res) => {
            setVideoList(res.data.items);
          })
          .catch(() => {
            console.log("fail");
          });
    ```
    
    비디오 재생 시간을 담은 정보 duration은 videos list api를 호출해야 얻을 수 있다. channel 별 playlist에서 동영상 id를 state를 저장한 후 videos api를 사용해 동영상을 불러 온다.
    
- api key 보관
    
    ```jsx
    REACT_APP_API_KEY=abcde
    ```
    
    .env 파일을 최상위 폴더에 생성 후 REACT_APP로 시작하는 이름을 지어준다.
    
    그후 gitignore에 추가하여 커밋 및 푸시가 되지 않도록 한다.
    

### 5. 뉴스 채널 전체 동영상 불러오기 (02/26)

- axios.all
    
    ```jsx
    			axios
            .all([
              axios.get("url"),
              axios.get("url"),
              axios.get("url"),
              axios.get("url"),
              axios.get("url"),
              axios.get("url"),
            ])
            .then(
              axios.spread((res1, res2, res3, res4, res5, res6) => {
                const data1 = res1.data.items;
                const data2 = res2.data.items;
                const data3 = res3.data.items;
                const data4 = res4.data.items;
                const data5 = res5.data.items;
                const data6 = res6.data.items;
                const res = [
                  ...data1,
                  ...data2,
                  ...data3,
                  ...data4,
                  ...data5,
                  ...data6,
                ];
    ```
    
- 전체 뉴스 채널 비디오 id shuffle 후 출력
    
    ```jsx
    	const shuffleArray = (sourceArr) => {
        const array = sourceArr.concat();
        // 피셔 예이츠 알고리즘
        const arrayLength = array.length;
        for (let i = arrayLength - 1; i >= 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
    
        return array;
      };
    
    	let copy = [];
    
      res.forEach((item) => {
          copy.push(item.snippet.resourceId.videoId);
      });
    
       setVideoId(shuffleArray(copy));
       copy = [];
    ```
    

### 6. div와 div 겹치기 (02/26)

- position absolute, relative 사용
    
    ```jsx
    const Time = styled.span`
      font-size: 12px;
      color: ${(props) => props.theme.color.white};
      background-color: ${(props) => props.theme.color.black};
      position: absolute;
      width: 50px;
      margin: 162px 0px 0px 270px;
    `;
    ```
    

### 7. react-query undefined

- Promise 반환
    
    1. 화살표 함수로 바로 리턴한다. 중괄호 없이 화살표함수를 사용해서 바로 리턴한다.
    
    ```jsx
    const { data, status } = useQuery(['todos', id], () => fetchByParam(id));
    ```
    
    2. 중괄호 내부에서 명시적으로 return문을 써준다.
    
    ```jsx
    const { data, status } = useQuery(['todos', id], () => {
        return fetchByParam(id);// Promise 를 리턴!!! 해줘야 한다.
    });
    ```
    
    3. async/await
    
    ```jsx
    useQuery(['todos', id], async () => {
      const data = await fetchByParam(id)
      return data
    });
    ```
    

### 8. useQuery data 바뀌지 않음 (02/27)

- key 값 변경
    
    ```jsx
    const { data: videoList, isLoading: videoListLoading } = useQuery(
        ["videoList", videoId],
        () => {
          let id = videoId.join(",");
          // console.log(id);
          return axios(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&id=${id}&key=${apiKey}`
          );
        }
      );
    ```
    
    react query의 useQuery는 설정한 key 값이 변경되지 않는 이상, 갖고 있는 캐싱 데이터를 내려준다. 
    
    videoList가 바뀌지 않으면 계속 같은 값을 내려주므로 videoId에 따라 다른 값을 내려줘야 하기 때문에 key 값을 바꿔주었다.
    

### 9. axios 여러 개 호출

- useQueries ????

### 10. 로딩 중 화면

- skeleton으로 대체
