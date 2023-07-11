import React from "react";

export default function Pln({ data }) {
  const sn = data[0].sn;
  const tujuan = data[0].tujuan;
  const {
    nama,
    tarif_daya,
    stand_meter,
    periode,
    admin,
    tagihan,
    total_tagihan,
  } = data[0].tambahan;
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const formattedDate = `${dd}-${mm}-${yyyy}`;
  return (
    <div
      style={{
        fontFamily: "Arial",
        fontSize: "11px",
        padding: "2mm",
        width: "80mm",
      }}
    >
      ------------------------------------------------------------------------------
      <br />
      Struk Pembayaran Tagihan Listrik
      <br />
      ------------------------------------------------------------------------------
      <table
        style={{
          fontFamily: "Arial",
          fontSize: "11px",
          padding: "2mm",
          width: "80mm",
        }}
      >
        <tr>
          <td>IDPEL</td>
          <td>: {tujuan}</td>
        </tr>
        <tr>
          <td>NAMA </td>
          <td>: {nama}</td>
        </tr>
        <tr>
          <td>TARIF/DAYA</td>
          <td>: {tarif_daya}</td>
        </tr>
        <tr>
          <td>BL/TH</td>
          <td>: {periode}</td>
        </tr>
        <tr>
          <td>STAND METER</td>
          <td>: {stand_meter}</td>
        </tr>
        <tr>
          <td>RP TAG PLN</td>
          <td>: Rp.{tagihan}</td>
        </tr>
        <tr>
          <td>NO REFF</td>
          <td>: {sn}</td>
        </tr>
        <tr>
          <td colSpan="2"></td>
        </tr>
        <tr>
          <td colSpan="2">PLN menyatakan struk ini sebagai</td>
        </tr>
        <tr>
          <td colSpan="2">bukti pembayaran yang sah.</td>
        </tr>
        <tr>
          <td colSpan="2"></td>
        </tr>
        <tr>
          <td>ADMIN CA*)</td>
          <td>: Rp.{admin}</td>
        </tr>
        <tr>
          <td>TOTAL BAYAR</td>
          <td>: Rp.{total_tagihan}</td>
        </tr>
      </table>
      <br />
      ------------------------------------------------------------------------------
      <br />
      <br />
      Rincian tagihan dapat diakses di www.pln.co.id
      <br />
      Informasi Contact Center : 123
      <br />
      Hubungi PLN Terdekat : 123
      <br />
      <br />
      Tanggal Beli : {formattedDate}
      <br />
    </div>
  );
}
