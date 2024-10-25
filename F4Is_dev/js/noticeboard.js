// 공지사항 세부 내용 보이기/숨기기
function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// 관리자 기능 버튼 보이기 (admin 계정만 표시)
window.onload = function() {
    const isAdmin = true; // admin 로그인 상태 확인 로직 필요
    const adminActions = document.getElementById('admin-actions');

    if (!isAdmin) {
        adminActions.style.display = 'none';
    }
}

// 게시글 삭제 시 비밀번호 확인
function deletePost() {
    const password = prompt('비밀번호를 입력하세요:');
    if (password === 'admin') {
        alert('삭제되었습니다.');
        // 실제 삭제 로직 구현
    } else {
        alert('비밀번호가 틀렸습니다.');
    }
}
