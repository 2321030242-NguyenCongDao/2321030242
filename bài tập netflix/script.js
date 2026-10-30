function doianh(so) {
    var anhcu = document.getElementById("anhbanner").src;
    var anh;

    if (so == 1) {
        anh = document.getElementById("anh1");
    }
    else if (so == 2) {
        anh = document.getElementById("anh2");
    }
    else if (so == 3) {
        anh = document.getElementById("anh3");
    }
    else if (so == 4) {
        anh = document.getElementById("anh4");
    }
    else if (so == 5) {
        anh = document.getElementById("anh5");
    }
    else if (so == 6) {
        anh = document.getElementById("anh6");
    }
    else if (so == 7) {
        anh = document.getElementById("anh7");
    }
    else if (so == 8) {
        anh = document.getElementById("anh8");
    }
    else if (so == 9) {
        anh = document.getElementById("anh9");
    }
    else if (so == 10) {
        anh = document.getElementById("anh10");
    }
    else if (so == 11) {
        anh = document.getElementById("anh11");
    }
    else if (so == 12) {
        anh = document.getElementById("anh12");
    }
    else if (so == 13) {
        anh = document.getElementById("anh13");
    }
    else if (so == 14) {
        anh = document.getElementById("anh14");
    }
    else if (so == 15) {
        anh = document.getElementById("anh15");
    }
    document.getElementById("anhbanner").src = anh.src;
    anh.src = anhcu;
}