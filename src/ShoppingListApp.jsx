import React, { useState } from "react";

// ======================== aplikasi dari ka rangga ===========================
// function ShoppingListApp() {
//   const [items, setItems] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editedName, setEditedName] = useState("");

//   const addItem = (newItem) => {
//     setItems([...items, newItem]);
//   };

//   const editItem = (index, updatedItem) => {
//     const updatedItems = [...items];
//     updatedItems[index] = updatedItem;
//     setItems(updatedItems);
//     setEditIndex(null); // tambahkan setEditIndex(null) untuk menghentikan mode edit setelah diedit
//   };

//   const removeItem = (index) => {
//     setItems(items.filter((item, i) => i !== index));
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           // const newItemName = e.target.itemName.value;
//           const title = e.target.title.value;

//           addItem({
//             id: Date.now(),
//             // name: newItemName,
//             title,
//             quantity: 1,
//             isCompleted: false,
//           });
//           e.target.reset();
//         }}
//       >
//         {/* <input type="text" name="itemName" placeholder="Item name" /> */}
//         <input type="text" name="title" placeholder="Item name" />

//         <button type="submit">Add Item</button>
//       </form>
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             {editIndex === index ? (
//               <>
//                 <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
//                 <button
//                   onClick={() => {
//                     editItem(index, {
//                       ...item,
//                       name: editedName,
//                     });
//                     setEditedName(""); // Mengosongkan setelah diedit
//                   }}
//                 >
//                   Save
//                 </button>
//               </>
//             ) : (
//               <div className={`${item?.isCompleted === true ? "line-through text-red-500" : ""}`}>
//                 {/* <img src={item?.name} /> */}
//                 <span
//                   onClick={() => {
//                     editItem(index, {
//                       ...item,
//                       isCompleted: !item?.isCompleted,
//                     });
//                   }}
//                 >
//                   {item.title}
//                 </span>
//                 <span className="mx-4">{item.quantity}</span>
//                 <button onClick={() => setEditIndex(index)}>Edit</button>
//               </div>
//             )}
//             <button onClick={() => removeItem(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingListApp;

// //  ======================== aplikasi dari mas hilzi ===========================
// function ShoppingListApp() {
//   // State untuk menyimpan daftar belanja (items)
//   const [items, setItems] = useState([]);
//   // State untuk indeks item yang sedang diedit
//   const [editIndex, setEditIndex] = useState(null);
//   // State untuk menyimpan nama item yang sedang diedit
//   const [editedName, setEditedName] = useState("");
//   const [Name, setName] = useState("");
//   // State untuk menyimpan kuantitas item yang sedang diedit
//   const [editedQuantity, setEditedQuantity] = useState(1);
//   const [Quantity, setQuantity] = useState(1);

//   // Fungsi untuk menambahkan item baru ke daftar belanja
//   const addItem = (newItem) => {
//     setItems([...items, newItem]);
//   };

//   // Fungsi untuk mengedit item dalam daftar belanja
//   const editItem = (index, updatedItem) => {
//     const updatedItems = [...items];
//     updatedItems[index] = updatedItem; // mengganti item index yang diberikan dengan updatedItem.
//     setItems(updatedItems);
//     setEditIndex(null); // Reset indeks edit setelah mengedit
//   };

//   // Fungsi untuk menghapus item dari daftar belanja
//   const removeItem = (index) => {
//     setEditIndex(null); // digunakan untuk memastikan bahwa gada item yg lagi dieditt saat mau diapus.
//     setItems(items.filter((item, i) => i !== index)); // .filter --> untuk membuat array baru yang tidak termasuk item dengan indeks yg diberikan.
//   };

//   // Fungsi untuk menangani pengiriman formulir (menambahkan atau menyimpan item)
//   const handleFormSubmit = (e) => {
//     e.preventDefault(); //menghentikan pengiriman form dan mencegah reload halaman.
//     console.log("Value", e.target); // melihat nilai valuenya
//     const newItemName = e?.target?.itemName?.value?.trim(); //.trim() --> untuk menghapus spasi di awal dan akhir string.
//     if (!newItemName) {
//       //memeriksa kondisi apakah nilainya kosong.
//       alert("Please enter an item name.");
//       return;
//     }
//     if (editIndex !== null) {
//       // Jika sedang mengedit, panggil fungsi editItem
//       console.log("Edit");
//       editItem(editIndex, {
//         ...items[editIndex],
//         name: newItemName,
//         quantity: editedQuantity,
//       });
//     } else {
//       // Jika menambahkan baru, panggil fungsi addItem dengan editedItem
//       addItem({
//         id: Date.now(), // id --> item baru ini dibedakan dengan menggunakan date.now() untuk pembeda id nya.
//         name: Name,
//         quantity: Quantity,
//       });
//     }
//     e.target.reset(); // setelah tambah item baru, maka atur ulang formnya ke default.
//     setEditedName("");
//     setEditedQuantity(1); // Reset nama dan kuantitas yang diedit setelah pengiriman formulir
//   };

//   // Render tampilan aplikasi
//   return (
//     <div className="container mx-auto p-4">
//       <form onSubmit={handleFormSubmit} className="mb-4">
//         <div className="flex items-center mb-2">
//           {/* Input untuk nama item */}
//           <input type="text" name="itemName" placeholder="Item name" value={Name} onChange={(e) => setName(e.target.value)} className="w-full mr-2 p-2 border rounded focus:outline-none" />
//           {/* Input untuk kuantitas item */}
//           <input type="number" min="1" value={Quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} className="w-20 p-2 border rounded focus:outline-none" />
//           {/* Tombol untuk menambahkan atau menyimpan item */}
//           <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//             {editIndex !== null ? "Save" : "Add Item"}
//           </button>
//         </div>
//       </form>
//       {/* Daftar item */}
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id} className="flex items-center justify-between py-2 border-b">
//             {editIndex === index ? (
//               // Tampilan saat mengedit item
//               // <form onSubmit={handleFormSubmit} className="mb-4">

//               <>
//                 <input type="text" name="itemName" value={editedName} onChange={(e) => setEditedName(e.target.value)} className="mr-2 p-2 border rounded focus:outline-none" />
//                 <input type="number" value={editedQuantity} onChange={(e) => setEditedQuantity(parseInt(e.target.value))} min="1" className="w-20 p-2 border rounded focus:outline-none" />
//                 <button
//                   onClick={() =>
//                     editItem(index, {
//                       ...items[editIndex],
//                       name: editedName,
//                       quantity: editedQuantity,
//                     })
//                   }
//                   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                 >
//                   Submit
//                 </button>
//               </>
//             ) : (
//               // </form>
//               // Tampilan saat tidak mengedit item
//               <>
//                 <span>
//                   {item.name} - Quantity: {item.quantity}
//                 </span>
//                 <div>
//                   {/* Tombol untuk mengedit item */}
//                   <button
//                     onClick={() => {
//                       setEditIndex(index);
//                       setEditedName(item.name);
//                       setEditedQuantity(item.quantity);
//                     }}
//                     className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//                   >
//                     Edit
//                   </button>
//                   {/* Tombol untuk menghapus item */}
//                   <button onClick={() => removeItem(index)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
//                     Remove
//                   </button>
//                 </div>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingListApp;

//  ======================== aplikasi dari mas dadang ===========================
// export default function ShoppingListApp() {
//   const [items, setItems] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editedName, setEditedName] = useState("");
//   const [editedSum, setEditedSum] = useState(0);
//   const [editedUnit, setEditedUnit] = useState("");

//   // Menambahkan item baru ke dalam array items dan memberikan pesan alert kepada pengguna
//   const addItem = (newItem) => {
//     if (newItem.name && newItem.sum) {
//       setItems([...items, newItem]);
//       return alert("Berhasil menambahkan data");
//     }
//     alert("Mohon inputkan data keseluruhan");
//   };

//   const editItem = (index, updatedItem) => {
//     const updatedItems = [...items];
//     updatedItems[index] = updatedItem;
//     setItems(updatedItems);
//   };

//   const removeItem = (index) => {
//     if (confirm(`Ingin menghapus?`)) {
//       setEditIndex(null);
//       setItems(items.filter((_, i) => i !== index));
//     }
//   };

//   return (
//     <div className="px-5">
//       <div className="max-w-[700px] w-full mx-auto border-[1px] border-black rounded-sm mt-10 py-2 px-2 pb-5 pt-3">
//         <div className="max-w-[650px] mx-auto">
//           <h1 className="text-2xl font-bold">Shopping List App</h1>
//           <form
//             onSubmit={(e) => {
//               // Menyimpan data ke variabel Items
//               e.preventDefault(); // Mencegah terjadinya refresh saat "Add item" di-klik
//               const newItemName = e.target.itemName.value; // Mendapatkan nilai dari input dengan atribut Item Nama
//               const newItemSum = e.target.itemSum.value; // Mendapatkan nilai dari input dengan atribut Jumlah
//               const newItemUnit = e.target.itemUnit.value; // Mendapatkan nilai dari input dengan atribut Buah

//               addItem({
//                 id: Date.now(),
//                 name: newItemName,
//                 sum: newItemSum,
//                 unit: newItemUnit,
//               });
//               e.target.reset();
//             }}
//             className="my-4 flex gap-x-4 justify-between"
//           >
//             <input type="text" className="border-[1px] outline-none max-w-[550px] w-full focus:border-[1px] focus:border-black border-gray-300 ps-1 rounded-sm px-2 py-1" name="itemName" placeholder="Item name" />
//             <input type="number" className="border-[1px] outline-none max-w-[550px] w-full focus:border-[1px] focus:border-black border-gray-300 ps-1 rounded-sm px-2 py-1" name="itemSum" placeholder="Jumlah" min="1" />
//             <select className="border border-gray-300 p-1" placeholder="tes" name="itemUnit">
//               <option value="Buah">Buah</option>
//               <option value="Gram">Gram</option>
//               <option value="Kg">Kg</option>
//               <option value="Liter">Liter</option>
//             </select>

//             <button type="submit" className="bg-gray-900 text-white rounded-sm px-2 py-1 w-[300px]">
//               Add Item
//             </button>
//           </form>

//           {items.length > 0 ? ( // Ternary mengecek apakah panjang dari items lebih besar dari 0 (ada isinya)
//             <div className="max-md:overflow-x-scroll">
//               <table className="w-full text-center ">
//                 <thead>
//                   <tr>
//                     <th className="border border-gray-700 py-2">No.</th>
//                     <th className="border border-gray-700 py-2">Nama</th>
//                     <th className="border border-gray-700 py-2">Jumlah</th>
//                     <th className="border border-gray-700 py-2">Unit</th>
//                     <th className="border border-gray-700 py-2">Aksi</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {items.map(
//                     (
//                       item,
//                       index // Menampilkan dan mengedit data item dalam tabel
//                     ) => (
//                       <tr key={item.id}>
//                         <td className="border border-black p-2">{index + 1}</td>
//                         <td className="border border-black p-2">
//                           {editIndex === index ? <input type="text" value={editedName} className="border-[1px] py-1 border-gray-300 outline-none ps-1  w-full" onChange={(e) => setEditedName(e.target.value)} /> : <span>{item.name}</span>}
//                         </td>
//                         <td className="border border-black p-2">
//                           {editIndex === index ? (
//                             <input value={editedSum} type="number" min="1" className="border-[1px] py-1 border-gray-300 outline-none ps-1 w-full max-w-[150px]" onChange={(e) => setEditedSum(e.target.value)} />
//                           ) : (
//                             <span>{item.sum}</span>
//                           )}
//                         </td>
//                         <td className="border border-black p-2">
//                           {editIndex === index ? (
//                             <select className="border border-gray-300 py-1" value={editedUnit} onChange={(e) => setEditedUnit(e.target.value)}>
//                               <option value="Buah">Buah</option>
//                               <option value="Gram">Gram</option>
//                               <option value="Kg">Kg</option>
//                               <option value="Liter">Liter</option>
//                             </select>
//                           ) : (
//                             <span>{item.unit}</span>
//                           )}
//                         </td>
//                         <td className="border border-black p-2">
//                           {editIndex === index ? (
//                             <div className="flex justify-center gap-x-3 w-full px-10">
//                               <button
//                                 onClick={() => {
//                                   editItem(index, {
//                                     ...item,
//                                     name: editedName,
//                                     sum: editedSum,
//                                     unit: editedUnit,
//                                   });
//                                   setEditedName("");
//                                   setEditedSum(0);
//                                   setEditedUnit("");
//                                   setEditIndex(null);
//                                 }}
//                                 className="bg-gray-900 rounded-sm text-white max-w-16 p-1 w-full"
//                               >
//                                 Save
//                               </button>
//                               <button
//                                 onClick={() => {
//                                   setEditedName("");
//                                   setEditedSum(0);
//                                   setEditedUnit("");
//                                   setEditIndex(null);
//                                 }}
//                                 className="bg-gray-900 rounded-sm text-white max-w-16 p-1 w-full"
//                               >
//                                 Batal
//                               </button>
//                             </div>
//                           ) : (
//                             <div className="flex justify-center gap-x-3">
//                               <button
//                                 onClick={() => {
//                                   setEditedName(item.name);
//                                   setEditedSum(item.sum);
//                                   setEditedUnit(item.unit);
//                                   setEditIndex(index);
//                                 }}
//                                 className="bg-blue-500 rounded-sm text-white p-1 max-w-16 w-full"
//                               >
//                                 Edit
//                               </button>
//                               <button onClick={() => removeItem(index)} className="bg-red-500 rounded-sm max-w-16 w-full text-white p-1">
//                                 Remove
//                               </button>
//                             </div>
//                           )}
//                         </td>
//                       </tr>
//                     )
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <p className="text-center">List kosong.....</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

//  ======================== aplikasi dari mas nikolas ===========================
// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment1 = () => {
//     setCount(count + 1);
//   };

//   const decrement1 = () => {
//     setCount(count - 1);
//   };
//   const increment2 = () => {
//     setCount(count + 2);
//   };

//   const decrement2 = () => {
//     setCount(count - 2);
//   };

//   return (
//     <div>
//       <div className="font-bold text-4xl py-10">NGITUNG KUY</div>
//       <p className="bg-[#da4848] text-3xl rounded border-white border">Count: {count}</p>
//       <div className="space-x-10 space-y-10  ">
//         <button className="border rounded bg-[#5CB85F] px-2.5 py-2 text-white font-semibold  border-white border" onClick={increment1}>
//           NAIK 1
//         </button>
//         <button className="border rounded bg-[#5CB85F] px-2.5 py-2 text-white font-semibold  border-white border" onClick={increment2}>
//           NAIK 2
//         </button>
//         <button className="border rounded bg-[#5CB85F] px-2.5 py-2 text-white font-semibold  border-white border" onClick={decrement1}>
//           TURUN 1
//         </button>

//         <button className="border rounded bg-[#5CB85F] px-2.5 py-2 text-white font-semibold  border-white border" onClick={decrement2}>
//           TURUN 2
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Counter;

// ======================== aplikasi dari mba talitha ===========================
function ShoppingListApp() {
  const [items, setItems] = useState([{ name: "Baju Raye", quantity: 5 }]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedQuantity, setEditedQuantity] = useState(0);

  const addItem = (newItemName, newItemQuantity) => {
    if (newItemName.trim() === "") {
      alert("Nama barang tidak boleh kosong!");
      return;
    }

    if (!newItemQuantity || isNaN(newItemQuantity)) {
      alert("Quantity tidak boleh kosong!");
      return;
    }

    if (newItemQuantity <= 0) {
      alert("Quantity harus lebih besar dari 0!");
      return;
    }
    // Memeriksa apakah item sudah ada sebelumnya
    const itemExists = items.some((item) => item.name.toLowerCase() === newItemName.toLowerCase());
    if (itemExists) {
      alert("Inputan sudah ada sebelumnya");
      return;
    }
    setItems([...items, { id: Date.now(), name: newItemName, quantity: newItemQuantity }]);
  };

  const editItem = (index, updatedItem) => {
    if (updatedItem.name === items[index].name && updatedItem.quantity === items[index].quantity) {
      // Jika tidak ada perubahan, tidak perlu memperbarui item
      setEditIndex(null);
      return;
    }
    const updatedItems = [...items];
    const editedNameExists = items.some((item, i) => i !== index && item.name.toLowerCase() === updatedItem.name.toLowerCase());
    if (editedNameExists) {
      alert("Nama barang sudah ada dalam daftar!");
      return;
    }
    updatedItems[index] = updatedItem;
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    setEditIndex(null);
    setItems(items.filter((item, i) => i !== index));
  };

  // Jumlah item dalam list
  const jumlahItem = items.length;

  // Totalin quantity
  const total = items.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="container rounded-md shadow-md py-8 px-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newItemName = e.target.itemName.value;
            const newItemQuantity = parseInt(e.target.itemQuantity.value);
            addItem(newItemName, newItemQuantity);
            e.target.reset();
          }}
        >
          <input className="border border-gray-500 py-1.5 rounded-md pl-3" type="text" name="itemName" placeholder="Item name" />
          <input className="border border-gray-500 py-1.5 rounded-md pl-3 ml-4" type="number" name="itemQuantity" placeholder="Quantity" />
          <button className="bg-green-500 text-white text-base font-medium px-3 py-2 rounded-md ml-4" type="submit">
            Add Item
          </button>
        </form>
        <table className="justify-start text-left mt-4 p-8">
          <thead>
            <tr>
              <th>Nama Barang</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                {editIndex === index ? (
                  <>
                    <td>
                      <input className="border border-gray-500 py-1.5 rounded-md pl-3 mr-2" type="text" value={editedName === "" ? item.name : editedName} onChange={(e) => setEditedName(e.target.value)} />
                    </td>
                    <td>
                      <input className="border border-gray-500 py-1.5 rounded-md pl-3 mt-2 mr-2" type="number" value={editedQuantity === 0 ? item.quantity : editedQuantity} onChange={(e) => setEditedQuantity(parseInt(e.target.value))} />
                    </td>
                    <td>
                      <button
                        className="bg-green-500 text-white text-base font-medium py-1 px-2 rounded-md mr-2"
                        onClick={() => {
                          if (editedName.trim() !== "" || editedQuantity !== "") {
                            editItem(index, {
                              ...item,
                              name: editedName.trim() !== "" ? editedName.trim() : item.name,
                              quantity: editedQuantity !== "" ? parseInt(editedQuantity) : item.quantity,
                            });
                            setEditIndex(null);
                          }
                        }}
                      >
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border border-b-slate-800 px-3 py-2">{item.name}</td>
                    <td className="border border-b-slate-800 px-3 py-2">{item.quantity}</td>
                    <td className="border border-b-slate-800 px-3 py-2">
                      <button
                        className="bg-yellow-500 text-white text-base font-medium py-1 px-2 rounded-md mr-2"
                        onClick={() => {
                          setEditIndex(index);
                          // Reset nilai editedName dan editedQuantity saat mode edit diaktifkan
                          setEditedName(item.name);
                          setEditedQuantity(item.quantity);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </>
                )}
                <td className="border border-b-slate-800 px-3 py-2">
                  <button className="bg-red-500 text-white text-base font-medium py-1 px-2 rounded-md" onClick={() => removeItem(index)}>
                    Remove
                  </button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-44">
          <p className="font-medium mt-2">Jumlah Item: {jumlahItem}</p>
          <p className="font-medium mt-2">Total: {total}</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingListApp;
