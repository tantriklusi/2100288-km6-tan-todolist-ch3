import React, { useState } from "react";
import { LuCloudCog, LuListTodo } from "react-icons/lu";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { IoCloudDone } from "react-icons/io5";
import { MdOutlineCloudDone } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function ProjectCheckList() {
  const [items, setItems] = useState([]); //state untuk menyimpan daftar project.
  const [editedName, setEditedName] = useState(""); //state untuk menyimpan nama yang sedang diedit.
  const [selectedDate, setSelectedDate] = useState(""); //state untuk menyimpan tanggal.
  const [editIndex, setEditIndex] = useState(null); //state untuk index item yang sedang diedit.
  const [editDetails, setEditDetails] = useState(""); //state untuk menyimpan description.
  const [showTodo, setShowTodo] = useState(false); //state untuk menampilkan project belum selesai.
  const [showDone, setShowDone] = useState(false); //state untuk menampilkan project yang sudah selesai.
  const [search, setSearch] = useState(""); //state untuk menjalankan fungsi search

  //validasi untuk tambah item (project) baru.
  const addItem = (e) => {
    if (editedName && editDetails && selectedDate) {
      const newItem = {
        id: Date.now(),
        name: editedName?.toLowerCase(),
        date: selectedDate,
        details: editDetails,
        checked: false, //item default dianggap blm dicentang
      };
      setItems([...items, newItem]);
      setEditedName("");
      setSelectedDate("");
      setEditDetails("");
    } else {
      alert("Mohon inputkan data keseluruhan");
    }
  };

  //fungsi untuk date nya.
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  //fungsi untuk edit item.
  const editItem = (index) => {
    setEditIndex(index); //menandai index item yang sedang diedit, sehingga mengetahui item mana yang sedang diedit.
    const itemToEdit = items[index];
    setEditedName(itemToEdit.name);
    setSelectedDate(itemToEdit.date);
    setEditDetails(itemToEdit.details);
  };

  //validasi untuk button save setelah dilakukan edit item.
  const saveEditedItem = () => {
    if (editedName && editDetails && selectedDate) {
      const updatedItems = [...items]; //membuat salinan array yg tidak mengubah array item asli.
      updatedItems[editIndex] = {
        ...updatedItems[editIndex], //membuat salinan dari item yg ada di updateItems[editIndex]
        name: editedName,
        details: editDetails,
        date: selectedDate,
      };
      setItems(updatedItems);
      setEditedName("");
      setEditDetails("");
      setSelectedDate("");
      setEditIndex(null); // Reset editIndex setelah selesai mengedit
      alert("Data berhasil diperbarui");
      return;
    }
  };

  //validasi untuk hapus item.
  const removeItem = (index) => {
    if (confirm(`Ingin menghapus?`)) {
      //confirm --> supaya ada opsi ok dan cancel.
      setItems(items.filter((_, i) => i !== index)); // jika indeks (i) !== index, item akan tetap dipertahankan dalam array.
    }
    //setItems(items.filter((item) => item !== itemToRemove))
  };

  //validasi untuk ceklis item.
  const toggleCheck = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked; //untuk membatalkan ceklis item.
    //untuk melalukan ceklis item.
    setItems(updatedItems);
    if (updatedItems[index].checked) {
      //apakah item ke ceklis?
      setCheckedItems([...checkedItems, index]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== index));
    }
  };

  //validasi untuk button show.
  const toggleShow = (type) => {
    if (type === undefined) {
      setShowTodo(true);
      setShowDone(true);
    } else if (type === "todo") {
      setShowTodo(true);
      setShowDone(false); //reset tampilan done
    } else if (type === "done") {
      setShowDone(true);
      setShowTodo(false); // Reset tampilan Todo
    }
  };

  //validasi untuk pencarian.
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //validasi untuk menghapus item yang sudah ke ceklis.
  const deleteDoneProjects = () => {
    const confirmed = window.confirm("Apakah Anda yakin ingin menghapus proyek yang telah selesai?");
    if (confirmed) {
      setItems(items.filter((item) => !item.checked));
    }
  };

  //validasi untuk menhapus semua item.
  const deleteAllProjects = () => {
    const confirmed = window.confirm("Apakah Anda yakin ingin menghapus semua proyek?");
    if (confirmed) {
      setItems([]);
    }
  };

  return (
    <div>
      <div>
        <div class="flex justify-center items-center p-4">
          <div class="text-center text-4xl flex flex-col items-center">
            <strong class="text-black p-4">Project Check List</strong>
            <img src="anak.jpeg" width="250px" alt="Project" />
          </div>
        </div>

        <div className="border rounded-md mb-8 shadow-md bg-cyan-950">
          <form
            //validasi untuk mengatur form saat di submit.
            onSubmit={(e) => {
              e?.preventDefault(); //mencegah refresh halaman // e? memastikan bahwa nilai e != null agar tdk eroe.
              if (editIndex !== null) {
                saveEditedItem();
              } else {
                addItem(e);
              }
            }}
            className="m-4 flex gap-x-4 justify-between bg"
          >
            <input type="text" className="border-2 rounded-lg px-2 py-1" name="itemName" placeholder="project name" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
            <input type="text" className="border-2 rounded-lg px-2 py-1" placeholder="description" value={editDetails} onChange={(e) => setEditDetails(e.target.value)} />
            <input type="date" id="datePicker" className="border-2 rounded-lg px-2 py-1" value={selectedDate} onChange={handleDateChange} />
            {editIndex !== null ? (
              <button type="submit" className=" text-white  rounded-full px-2 py-1 w-[300px] hover:bg-cyan-600 bg-cyan-500">
                Save
              </button>
            ) : (
              <button type="submit" className=" text-white font-bold rounded-full px-2 py-1 w-[300px] hover:bg-teal-600 bg-teal-500">
                Add Project
              </button>
            )}
          </form>
        </div>
        <div className="border rounded-md mb-8 shadow-md">
          <div className="m-4 flex gap-x-4 justify-center">
            <button className={`flex items-center bg-pink-400 text-white rounded-full px-10 hover:bg-pink-600 ${showTodo && showDone ? "bg-pink-600" : ""}`} onClick={() => toggleShow()}>
              <FaRegListAlt className="mr-4" /> All
            </button>
            <button className={`flex items-center bg-pink-400 text-white rounded-full px-10 hover:bg-pink-600 ${showTodo ? "bg-pink-600" : ""}`} onClick={() => toggleShow("todo")}>
              <LuListTodo className="mr-4" /> Todo
            </button>
            <button className={`flex items-center bg-pink-400 text-white rounded-full px-10 hover:bg-pink-600 ${showDone ? "bg-pink-600" : ""}`} onClick={() => toggleShow("done")}>
              <IoCheckmarkDoneCircle className="mr-4" /> Done
            </button>
            <input
              type="text"
              className="border-[1px] outline-none max-w-[550px] w-full focus:border-[1px] focus:border-black border-gray-300 ps-1 rounded-md px-2 py-1"
              placeholder="Search projects"
              value={search}
              onChange={handleSearch}
            />
            <div>
              <FaSearch />
            </div>
          </div>

          <div className="mx-4">
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th className="border py-2">No.</th>
                  <th className="border py-2">Project Name</th>
                  <th className="border py-2">Description</th>
                  <th className="border py-2">Due Date</th>
                  <th className="border py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {items
                  .filter((item) => {
                    if (showTodo === true && showDone === false) {
                      return item.checked === false;
                    } else if (showDone === true && showTodo === false) {
                      return item?.checked === true;
                      // item?.checked = false
                      // true = true
                      // item?.checked === true
                      // false === true
                      // false
                      // true/false
                    } else {
                      // showDone true
                      // showTodo true
                      return true;
                    }
                  })
                  .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
                  //.includes --> memeriksa apakah string dalam search ada pada properti name. Jika ya, maka elemen tersebut akan disertakan dalam hasil filter.
                  .map((item, index) => (
                    <tr key={item.id} className={item.checked ? "line-through" : ""}>
                      <td className="border border-b-slate-800 py-2">{index + 1}</td>
                      <td className="border border-b-slate-800 py-2"> {item.name}</td>
                      <td className="border border-b-slate-800 py-2">{item.details}</td>
                      <td className="border border-b-slate-800 py-2">{item.date}</td>
                      <td className="border border-b-slate-800 py-2">
                        <button className="bg-yellow-400 text-white rounded-full px-2 py-2 mr-2 hover:bg-yellow-600" onClick={() => editItem(index)}>
                          <RiEdit2Fill />
                        </button>
                        <button className="bg-red-400 text-white rounded-full px-2 py-2 mr-2 hover:bg-red-600" onClick={() => removeItem(index)}>
                          <MdDeleteForever />
                        </button>
                        <button className="bg-emerald-400 text-white rounded-full px-2 py-2 mr-2 hover:bg-teal-600" onClick={() => toggleCheck(index)}>
                          {item.checked ? <IoCloudDone /> : <MdOutlineCloudDone />}
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="my-4 flex gap-x-4 justify-center">
              <button className="bg-red-400 text-white rounded-full px-10 hover:bg-red-600 mr-2" onClick={deleteAllProjects}>
                Delete All Project
              </button>
              <button className="bg-red-400 text-white rounded-full px-10 hover:bg-red-600 mr-2" onClick={deleteDoneProjects}>
                Delete Done Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCheckList;
