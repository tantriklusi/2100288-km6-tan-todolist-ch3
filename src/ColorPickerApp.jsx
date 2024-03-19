import React, { useState } from "react";

// ========================== aplikasi punya lusi ==========================
// function ColorPickerApp() {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

//   // Validasi untuk button warna pastel.
//   const softColor = () => {
//     const minValue = 200;
//     const maxValue = 255;

//     const red = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; //.floor --> guanya untuk pembulatan ke bawah misal 200,45 jadi 200
//     const green = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
//     const blue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

//     if (red >= minValue && red <= maxValue && green >= minValue && green <= maxValue && blue >= minValue && blue <= maxValue) {
//       setRed(red.toString());
//       setGreen(green.toString());
//       setBlue(blue.toString());
//     }
//   };

//   // Validasi untuk cek warnanya gelap atau terang.
//   const darkColor = () => {
//     if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
//       const isGelap = red < 150 && green < 150 && blue < 150;
//       if (isGelap) {
//         alert("Warna yang dipilih adalah dark color."); // Pesan validasi warna gelap
//       } else {
//         alert("Warna yang dipilih adalah light color."); // Pesan validasi warna terang
//       }
//     } else {
//       alert("Harap pilih nilai warna yang valid! rentang warna valid adalah 0 - 255.");
//     }
//   };

//   // Validasi untuk button simpan warna.
//   const saveColor = () => {
//     // Validasi apakah nilai RGB sudah valid
//     if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
//       alert("Warna berhasil disimpan!");
//     } else {
//       alert("Harap pilih nilai warna yang valid! rentang warna valid adalah 0 - 255."); // Pesan kesalahan apabila rate angkanya lebih dari 0-255
//     }
//   };

//   //Validasi button "Batalkan".
//   const reset = () => {
//     setRed(0);
//     setGreen(0);
//     setBlue(0);
//     alert("Angka di reset kembali ke 0 yaa!");
//   };

//   return (
//     <div style={{ textAlign: "left", marginTop: "10px" }}>
//       <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, width: 400, height: 200, marginBottom: "20px" }}></div>
//       <div style={{ width: 400, height: 30, marginBottom: "10px" }}>
//         <label style={{ marginRight: "10px", marginBottom: "5px" }}>Red:</label>
//         <input style={{ width: 300, height: 25, textAlign: "left", marginLeft: "50px" }} value={red} onChange={(e) => setRed(e.target.value)} />
//       </div>
//       <div style={{ width: 400, height: 30, marginBottom: "10px" }}>
//         <label style={{ marginRight: "10px", marginBottom: "5px" }}>Green:</label>
//         <input style={{ width: 300, height: 25, textAlign: "left", marginLeft: "34px" }} value={green} onChange={(e) => setGreen(e.target.value)} />
//       </div>
//       <div style={{ width: 400, height: 30, marginBottom: "10px" }}>
//         <label style={{ marginRight: "10px", marginBottom: "5px" }}>Blue:</label>
//         <input style={{ width: 300, height: 25, textAlign: "left", marginLeft: "45px" }} value={blue} onChange={(e) => setBlue(e.target.value)} />
//       </div>
//       <button style={{ marginRight: "10px", border: "1px solid black", padding: "5px 10px" }} onClick={softColor}>
//         Warna Pastel
//       </button>
//       <button style={{ marginRight: "10px", border: "1px solid black", padding: "5px 10px" }} onClick={darkColor}>
//         Cek Warna
//       </button>
//       <button style={{ marginRight: "10px", border: "1px solid black", padding: "5px 10px" }} onClick={saveColor}>
//         Simpan Warna
//       </button>
//       <button style={{ border: "1px solid black", padding: "5px 10px" }} onClick={reset}>
//         Batalkan
//       </button>
//       <p style={{ textAlign: "center" }}>
//         RGB: {red}, {green}, {blue}
//       </p>
//     </div>
//   );
// }
// export default ColorPickerApp;

//  ========================== aplikasi punya mas aditya ==========================
function ColorPickerApp() {
  const [red, setRed] = useState("0");
  const [green, setGreen] = useState("0");
  const [blue, setBlue] = useState("0");
  const [colorName, setColorName] = useState("");

  function getRGB(colorName) {
    //Kamus Warna
    const kamusWarna = {
      merah: [255, 0, 0],
      hijau: [0, 255, 0],
      biru: [0, 0, 255],
      putih: [255, 255, 255],
      hitam: [0, 0, 0],
      pink: [255, 192, 203],
      kuning: [255, 255, 0],
      orange: [255, 165, 0],
      coklat: [210, 105, 3],
      ungu: [128, 0, 128],
      abu: [96, 96, 96],
    };

    //ubah teks menjadi lowercase
    const lowerColorName = colorName.toLowerCase();

    //pengecekan ketersediaan warna
    if (lowerColorName in kamusWarna) {
      return kamusWarna[lowerColorName];
    } else {
      alert("Maaf, Warna Tidak Terdeteksi");
    }
  }

  //Memasukkan kode warna ke masing masing komponen RGB
  const pickColor = () => {
    const rgb = getRGB(colorName);
    setRed(rgb[0].toString());
    setGreen(rgb[1].toString());
    setBlue(rgb[2].toString());
  };

  //reset
  const resetColor = () => {
    setRed("0");
    setGreen("0");
    setBlue("0");
    setColorName("");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-5 border">
        <div className="text-center p-10">
          <h1 className="text-4xl">
            <strong>Color Picker</strong>
          </h1>
          <p>Jelajahi Dunia Warna</p>
        </div>
        <div
          style={{
            backgroundColor: `rgb(${red}, ${green},${blue})`,
            width: 300,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          className="border"
        >
          <p className="text-white">
            RGB: {red}, {green}, {blue}
          </p>
        </div>

        <div>
          <p className="p-5 text-center">Cari Kode Warna Anda</p>
        </div>
        <div className="border p-1">
          <label>Nama Warna : </label>
          <input value={colorName} onChange={(e) => setColorName(e.target.value)} />
        </div>
        <div className="p-4 flex items-center justify-center">
          <button onClick={pickColor} className="bg-blue-500 text-white p-2 rounded-md">
            Submit
          </button>
          <div className=" p-4 flex items-center justify-center">
            <button onClick={resetColor} className="bg-yellow-500 text-white p-2 rounded-md">
              Reset
            </button>
          </div>
        </div>

        <div className="border p-1">
          <label>Red : </label>
          <input
            value={red}
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0 && value <= 255) {
                setRed(value.toString());
              }
            }}
          />
        </div>
        <div className="border p-1">
          <label>Green : </label>
          <input
            value={green}
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0 && value <= 255) {
                setGreen(value.toString());
              }
            }}
          />
        </div>
        <div className="border p-1">
          <label>Blue : </label>
          <input
            value={blue}
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0 && value <= 255) {
                setBlue(value.toString());
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default ColorPickerApp;
