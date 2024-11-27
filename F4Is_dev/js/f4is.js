var submit = document.getElementById('submitButton');
submit.onclick = showImage; // Submit 버튼 클릭 시 이미지 보여주기

function showImage() {
    var imageContainer = document.getElementById('imageContainer');
    var calorieInfoContainer = document.getElementById('calorieInfo');

    // 이미지가 존재하는지 확인하고 보이도록 설정
    var newImage = imageContainer.querySelector("img");
    if (newImage) {
        newImage.style.visibility = "visible";
    }

    // 이미지 업로드 섹션 숨기기
    document.getElementById('image-upload').style.visibility = 'hidden';

    // 기존 파일 이름 초기화
    document.getElementById('fileName').textContent = null;

    // 칼로리 정보 생성 및 표시
    calorieInfoContainer.textContent = ""; // 기존 칼로리 정보 초기화
    var randomCalories = Math.floor(Math.random() * 1000) + 700; // 700~1799 범위의 랜덤 숫자
    calorieInfoContainer.textContent = `칼로리 = ${randomCalories} kcal`;
}

function loadFile(input) {
    var file = input.files[0];

    // 파일 이름 표시
    var name = document.getElementById('fileName');
    name.textContent = file.name;

    // 이미지 엘리먼트 생성 및 초기 설정
    var newImage = document.createElement("img");
    newImage.setAttribute("class", "img");

    newImage.src = URL.createObjectURL(file);
    newImage.style.width = "70%";
    newImage.style.height = "70%";
    newImage.style.visibility = "hidden"; // Submit 버튼 누르기 전까지 숨기기
    newImage.style.objectFit = "contain";

    var container = document.getElementById('image-show');
    container.appendChild(newImage);
}
