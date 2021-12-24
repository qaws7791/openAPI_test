//액션 타입 정의
const SUBMIT = 'form/SUBMIT';

//액션 생성함수 정의
export const submit = url => ({type:SUBMIT, url});

//초기상태 정의
const initialState = {
    url:"https://www.kopis.or.kr/openApi/restful/pblprfr?service=06a11aff5c1a4a0fb3b8856fe545e031&stdate=20200101&eddate=20201201&rows=30&cpage=1",
};

//리듀서 작성
export default function form(state = initialState,action) {
    switch(action.type) {
        case SUBMIT:
            return { url: action.url };
        default:
            return state;
    }
    
}