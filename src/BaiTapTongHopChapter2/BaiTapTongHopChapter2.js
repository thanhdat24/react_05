import React, { useState } from "react";
import _ from "lodash";
import Popup from "./Popup";

const data = [
  {
    maMonAn: "MA01",
    tenMonAn: "Cơm chiên dương châu",
    gia: 200,
    hinhAnh: "http://casestudy.cyberlearn.vn/img/MA01.jpeg",
    maDanhMuc: "MC",
    tenDanhMuc: "Món chiên",
  },
  {
    maMonAn: "MA02",
    tenMonAn: "Cơm chiên cá mặn",
    gia: 300,
    hinhAnh: "http://casestudy.cyberlearn.vn/img/MA02.jpeg",
    maDanhMuc: "MC",
    tenDanhMuc: "Món chiên",
  },
  {
    maMonAn: "MA03",
    tenMonAn: "Gà nướng muối ớt",
    gia: 500,
    hinhAnh: "http://casestudy.cyberlearn.vn/img/MA03.jpeg",
    maDanhMuc: "MN",
    tenDanhMuc: "Món nướng",
  },
  {
    maMonAn: "MA04",
    tenMonAn: "Gà nướng muối tiêu chanh",
    gia: 600,
    hinhAnh: "http://casestudy.cyberlearn.vn/img/MA04.jpeg",
    maDanhMuc: "MN",
    tenDanhMuc: "Món nướng",
  },
  {
    maMonAn: "MA05",
    tenMonAn: "Trà đào cam sả",
    gia: 50,
    hinhAnh: "http://casestudy.cyberlearn.vn/img/MA05.jpeg",
    maDanhMuc: "GK",
    tenDanhMuc: "Giải khát",
  },
  {
    maMonAn: "MA06",
    tenMonAn: "Bia heniken",
    gia: 50,
    hinhAnh: "http://casestudy.cyberlearn.vn/img/MA06.jpeg",
    maDanhMuc: "GK",
    tenDanhMuc: "Giải khát",
  },
];

export default function BaiTapTongHopChapter2() {
  // Loại bỏ những thuộc tính maDanhMuc trùng
  const mangDanhMuc = _.uniqBy(data, "maDanhMuc");
  const [maDanhMuc, setMaDanhMuc] = useState(mangDanhMuc[0].maDanhMuc);

  // console.log("mangDanhMuc", mangDanhMuc);
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState({});
  return (
    <div>
      <Popup openModal={openModal} setOpenModal={setOpenModal} item={item} />
      <div className="grid grid-cols-6">
        <div className="h-full p-3 space-y-2 w-full col-span-1 dark:bg-coolGray-900 dark:text-coolGray-100">
          <div className="flex items-center p-2 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-12 h-12 rounded-full dark:bg-coolGray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
              <span className="flex items-center space-x-1">
                <a
                  href="#"
                  className="text-xs hover:underline dark:text-coolGray-400"
                >
                  View profile
                </a>
              </span>
            </div>
          </div>
          <div className="divide-y divide-coolGray-700">
            <h3>Danh mục món ăn</h3>
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {mangDanhMuc.map((item, index) => {
                const classNameAcive = [
                  "dark:bg-coolGray-800",
                  "dark:text-coolGray-50",
                  maDanhMuc === item.maDanhMuc ? "bg-gray-300 font-bold" : "",
                ];
                return (
                  <li
                    onClick={() => {
                      setMaDanhMuc(item.maDanhMuc);
                    }}
                    key={index}
                    className={classNameAcive.join(" ")}
                  >
                    <a
                      href="#"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <span>{item.tenDanhMuc}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="pt-4 pb-2 space-y-1 text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-5">
          <h3 className="text-center text-8xl text-purple-500 mt-5">Menu</h3>
          <section className="text-gray-600 body-font">
            <div className="container px-5 p-14 mx-auto">
              <div className="flex flex-wrap -m-4">
                {_.filter(data, (item) => item.maDanhMuc === maDanhMuc).map(
                  (item, index) => {
                    return (
                      <div key={index} className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-5 pb-20 rounded-lg overflow-hidden text-center relative">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            {item.tenMonAn}
                          </h2>
                          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                            {item.tenMonAn}
                          </h1>
                          <p className="leading-relaxed mb-3">
                            <img src={item.hinhAnh} alt={item.tenMonAn} />
                          </p>
                          <a
                            onClick={() => {
                              setOpenModal(true);
                              setItem(item);
                            }}
                            className="cursor-pointer text-indigo-500 inline-flex items-center"
                          >
                            Chi Tiết
                          </a>
                          <div className="leading-none flex justify-end absolute bottom-0 left-0 w-full pb-5">
                            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 text-lg">
                              Giá: {item.gia}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
