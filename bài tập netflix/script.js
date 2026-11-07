
var danhsachanh = [
    { id: 1, ten: "anh1" },
    { id: 2, ten: "anh2" },
    { id: 3, ten: "anh3" },
    { id: 4, ten: "anh4" },
    { id: 5, ten: "anh5" },
    { id: 6, ten: "anh6" },
    { id: 7, ten: "anh7" },
    { id: 8, ten: "anh8" },
    { id: 9, ten: "anh9" },
    { id: 10, ten: "anh10" },
    { id: 11, ten: "anh11" },
    { id: 12, ten: "anh12" },
    { id: 13, ten: "anh13" },
    { id: 14, ten: "anh14" },
    { id: 15, ten: "anh15" }
];

function doianh(id) {
    var anhbanner = document.getElementById("anhbanner");
    var anhcu = anhbanner.src;
    
    for (var i = 0; i < danhsachanh.length; i++) {
        if (danhsachanh[i].id == id) {
            var anh = document.getElementById(danhsachanh[i].ten);

            anhbanner.src = anh.src;
            anh.src = anhcu;
        }
    }
}
