var submit = document.getElementById('submitButton');
submit.onclick = showImage; // Submit 버튼 클릭 시 이미지와 칼로리 정보 표시

function showImage() {
    var imageContainer = document.getElementById('image-show');

    // 업로드된 이미지가 있는지 확인
    var newImage = imageContainer.querySelector("img");
    if (newImage) {
        newImage.style.visibility = "visible"; // 이미지 표시
    } else {
        alert("이미지를 업로드해주세요!");
        return; // 이미지가 없으면 종료
    }

    // 이미지 업로드 섹션 숨기기
    document.getElementById('image-upload').style.visibility = 'hidden';

    // 기존 칼로리 정보 초기화 후 새 정보 생성
    var calorieInfo = document.getElementById('calorieInfo');
    if (!calorieInfo) {
        calorieInfo = document.createElement("p");
        calorieInfo.setAttribute("id", "calorieInfo");
        calorieInfo.style.paddingTop = "800px"; // 간격 추가
        imageContainer.appendChild(calorieInfo);
    }
    var randomCalories = Math.floor(Math.random() * 1000) + 700; // 700~1799 범위
    calorieInfo.textContent = `칼로리 = ${randomCalories} kcal`;
}

function loadFile(input) {
    var file = input.files[0];
    if (!file) return; // 파일이 없으면 종료

    // 파일 이름 표시
    var name = document.getElementById('fileName');
    name.textContent = file.name;

    // 이미지 엘리먼트 생성 및 설정
    var newImage = document.createElement("img");
    newImage.setAttribute("class", "img");
    newImage.src = URL.createObjectURL(file);
    newImage.style.width = "70%";
    newImage.style.height = "70%";
    newImage.style.visibility = "hidden"; // Submit 버튼 전까지 숨기기
    newImage.style.objectFit = "contain";

    // 기존 이미지 제거 후 새 이미지 추가
    var container = document.getElementById('image-show');
    container.innerHTML = ""; // 기존 콘텐츠 초기화
    container.appendChild(newImage);
}
