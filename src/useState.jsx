import React, { useState } from "react";

export default function ShoppingListApp() {
  const [list, setList] = useState(["Sayur", "Buah", "Sambal"]);
  const [tambahList, setTambahList] = useState("");
  const [indexEdit, setIndexEdit] = useState(null);
  const [inputEdit, setInputEdit] = useState("");
  console.log("INDEX EDIT", inputEdit);
  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e?.preventDefault();
            setList([tambahList, ...list]);
            // ["Sayur", "Buah", "Sambal"] // list
            // "tambahList" // tambahList
            // [["Sayur", "Buah", "Sambal"],"tambahList"] // TANPA SPREAD OPERATOR(...)
            // ["Sayur", "Buah", "Sambal", "tambahList"] // DENGAN SPREAD OPERATOR(...)
          }}
        >
          <input placeholder="TAMBAH" value={tambahList} onChange={(e) => setTambahList(e?.target?.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {list?.map((e, i) => {
          return (
            <div key={i} className="flex mb-4">
              <div className="">{e}</div>
              <button
                className="border-green-200 border-4 mx-10"
                onClick={() => {
                  setList(list?.filter((el) => el !== e));
                }}
              >
                Delete
              </button>
              <button
                className="border-green-200 border-4"
                onClick={() => {
                  setIndexEdit(i);
                  setInputEdit(e);
                }}
              >
                Edit
              </button>
              {indexEdit === i ? (
                <div>
                  <input placeholder="EDIT" value={inputEdit} onChange={(e) => setInputEdit(e?.target?.value)} />
                  <button
                    onClick={() => {
                      const newList = [...list];
                      newList[indexEdit] = inputEdit;
                      setList(newList);
                      //   setList(
                      //     list?.map((el, i) => (i === indexEdit ? inputEdit : el))
                      //   );
                    }}
                  >
                    Submit
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
