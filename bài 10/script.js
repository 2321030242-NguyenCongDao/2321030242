
var danhsachbaihat = [
    {
        id: 1,
        ten: "Thịnh Vượng Việt Nam Sáng Ngời",
        duongdanyoutube: "https://www.youtube.com/embed/qaVjA4a9O7w"
    },
    {
        id: 2,
        ten: "Ba Kể Con Nghe",
        duongdanyoutube: "https://www.youtube.com/embed/tIjUEqm60Ig"
    },
    {
        id: 3,
        ten: "Buồn Thì Cứ Khóc Đi",
        duongdanyoutube: "https://www.youtube.com/embed/X-GCJwz4PnY"
    },
    {
        id: 4,
        ten: "Nhắm Mắt Thấy Mùa Hè",
        duongdanyoutube: "https://www.youtube.com/embed/fgpwTxIv76Q"
    }
];

function chonbai(id) {
    for (let i = 0; i < danhsachbaihat.length; i++) {
        if (danhsachbaihat[i].id == id) {
            document.getElementById("video").src =
                danhsachbaihat[i].duongdanyoutube;
        }
    }
}
