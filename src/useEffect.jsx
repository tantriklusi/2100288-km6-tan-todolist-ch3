export default function useEffect() {
  const [data, setData] = useState("");
  const [output, seOutput] = useState("");

  useEffect(() => {
    // BENTUK USEEFECT YANG PALING SERING DIPAKAI
    console.log("USE EDDECT HANYA AKAN JALAN SATU KALI KETIKA APLIKASI AKAN DI RENDER");
  }, []); // CIRI-CRINYA ADA ARRAY KOSONG []

  useEffect(() => {
    // BENTUK USEEFFECT YANG KADANG-KADANG DIPAKAI
    console.log("USE EFFECT AKAN JALAN SETIAP ADA PERUBAHAN PADA DATA KETIKA APLIKASI AKAN DI RENDER");
  }, [data]); // CIRI-CIRINYA ADA VARIABLE DALAM ARRAY NYA

  useEffect(() => {
    // BENTUK USEEFECT YANG PALING JARANG DIPAKAI
    console.log("USE EFFECT AKAN JALAN TERUS SETIAP ADA PERUBAHAN APAPUN");
  }); // CIRI-CIRINYA TIDAK ADA ARRAY

  return (
    <div>
      <div>USE EFFECT</div>
      <div>
        <input placeholder="INPUT" value={data} onChange={(e) => setData(e?.t?.value)} />
        <input placeholder="OUTPUT" value={output} onChange={(e) => seOutput(e?.t?.value)} />
      </div>
    </div>
  );
}
