// describe : 테스트 유닛 모음
describe("자스민 테스트 입니다.", () => {
    // it : 테스트 유닛
    it("덧셈을 하는 함수입니다.", () => {
        let num = 10;

        // expect : 실행할 함수의 결과 값을 인수로 전달
        // toBe : 기대한 결과가 일치하는지 판단해주는 함수
        expect(plusOne(num)).toBe(num + 1);
    });
});