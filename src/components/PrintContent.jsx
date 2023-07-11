import React from "react";
import Bpjs from "./potrait/Bpjs";
import Pln from "./potrait/Pln";
import PlnToken from "./potrait/PlnToken";
import Tagihan from "./potrait/Tagihan";
import Fif from "./potrait/Fif";

export default function printContent({ data }) {
  let kode_produk = data[0].kode_produk;

  if (kode_produk === "BYRPLN") {
    return <Pln data={data} />;
  } else if (kode_produk.includes("BYRPLN")) {
    return <PlnToken data={data} />;
  } else if (kode_produk.includes("BYRBPJS" || "BYRBPJSTK")) {
    return <Bpjs data={data} />;
  } else if (kode_produk.includes("BYRFNFIF")) {
    return <Fif data={data} />;
  } else {
    return <Tagihan data={data} />;
  }
}
