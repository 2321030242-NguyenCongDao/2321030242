-- câu lệnh tạo database
-- create database + tên db

create database if not exists netflix;
-- nguoi_dung
create table if not exists nguoi_dung (
	id int auto_increment; --key
	ten_dang_nhap varchar(50);
    mat_khau varchar(30);
    email varchar(50);
    so_dien_thoai varchar(10);
);

-- phim
    id int;--key
    ten_phim varchar(100)
    thoi_luong int;
    nam int;
    gioi_thieu varchar(255);
    dao_dien_id int;

-- phim_dien_vien
    id int; --key
    phim_id int;
    dien_vien_id int;

-- phim_the_loai
    id int; --key
    phim_id int;
    the_loai_id int;

-- dao_dien
    id int; --key
    ten_dao_dien varchar(50);

-- the_loai
    id int; --key
    ten_the_loai varchar(50);

-- dien_vien
    id int; --key
    ten_dien_vien varchar(50);

--quoc_gia
    id int; --key
    ten_quoc_gia varchar(50);
--nối phim_the_loai
    SELECT * FROM phim p
    JOIN phim_the_loai ptl
    ON p.id = ptl.phim_id
    JOIN the_loai tl
    ON ptl.the_loai_id = tl.id
    WHERE p.id = 1;


