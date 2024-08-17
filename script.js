const foods = [
    "김치찌개", "불고기", "비빔밥", "된장찌개", "갈비찜", "김밥", "짜장면", "초밥", "라면", "떡볶이",
    "순두부찌개", "회", "샤브샤브", "치킨", "피자", "햄버거", "스파게티", "리소토", "타코", "브리또",
    "샐러드", "오므라이스", "삼겹살", "가츠동", "우동", "냉면", "볶음밥", "계란찜", "전", "호두과자",
    "만두", "잡채", "불닭", "족발", "감자탕", "카레", "소고기국", "닭갈비", "해물파전", "라자냐",
    "크림파스타", "닭꼬치", "스테이크", "훈제연어", "버섯전골", "채소튀김", "홍합탕", "멕시칸쌀", "콩나물국",
    "순대국", "김치볶음밥", "미역국", "부대찌개", "양장피", "소바", "파에야", "스시", "고로케", "국수",
    "피쉬앤칩스", "카프레제", "오리훈제", "쌀국수", "밀면", "양념치킨", "다시마국", "떡국", "연어덮밥",
    "너무너무", "고기전골", "치킨윙", "쌈밥", "해물탕", "갈비국", "오징어볶음", "두부조림", "각종 전골",
    "만두국", "김치전", "조개구이", "쭈꾸미 볶음", "보쌈", "닭볶음탕", "갈비구이", "해물찜", "찜닭",
    "계란말이", "두루치기", "양념게장", "갈릭버터새우", "궁중떡볶이", "물회", "닭갈비전골", "막국수",
    "비빔냉면", "찹쌀떡", "고구마순볶음", "나물비빔밥", "멸치볶음", "감자조림", "치킨너겟"
];

const spins = 1; // 회전 횟수

document.getElementById('spinButton').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    const randomDegree = (spins * 360) + (Math.floor(Math.random() * 360)); // 1번 회전 + 랜덤 각도
    wheel.style.transform = `rotate(${randomDegree}deg)`;
    
    setTimeout(() => {
        const selectedFoodIndex = Math.floor((randomDegree % 360) / (360 / foods.length));
        const selectedFood = foods[selectedFoodIndex];
        document.getElementById('recommendation').innerText = `오늘 저녁에 먹을 음식은: ${selectedFood}`;
    }, 4000); // 회전 애니메이션이 끝난 후 음식 선택
});
