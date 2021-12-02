// array - map 함수
let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}];

data.map(x => x.중간고사점수);

// array - filter 함수
// 예제-1
let 회원정보 = [{
    아이디 : 'jjang',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun1@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang2',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun2@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang3',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun3@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang4',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun4@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}];

// filter는 모든 데이터 순회
console.log(회원정보.filter(el => el.성별 === "남" && el.가입연도.split("-")[0] === "2021").map(x => x.아이디));
// find는 데이터를 순회하며 해당 데이트를 찾으면 순회를 멈춘다.
// 고유 값을 찾을 때 유용하게 사용.
console.log(회원정보.find(el => el.아이디 === "jjang"));

// 예제-2
let blogs = [{
    id : 1,
    title : 'title1',
    content : 'content1',
    section : '취미'
}, {
    id : 2,
    title : 'title2',
    content : 'content2',
    section : '개발'
}, {
    id : 3,
    title : 'title3',
    content : 'content3',
    section : '개발'
}];

let s = '개발';
let data = s ? blogs.filter(b => b.section === s) : blogs;