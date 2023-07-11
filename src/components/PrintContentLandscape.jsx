import React from "react";
import Pln from "./landscape/Pln";
import PlnToken from "./landscape/PlnToken";
import Bpjs from "./landscape/Bpjs";
import Tagihan from "./landscape/Tagihan";
import Fif from "./landscape/Fif";

export default function PrintContentLandscape({ data }) {
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
