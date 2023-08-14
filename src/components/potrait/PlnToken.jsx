import React from "react";

export default function PlnToken({ data }) {
  const { harga, sn } = data[0];
  const {
    id_meteran,
    id_pelanggan,
    nama,
    stand_meter,
    pln_ref,
    materai,
    rp_token,
    ppn,
    ppj,
    token,
    admin,
  } = data[0].tambahan;

  const total = parseInt(harga) + parseInt(admin);
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
        margin: "0 auto",
      }}
    >
      <center>STRUK PEMBELIAN LISTRIK PRABAYAR</center>
      <br />
      -----------------------------------------------------------------------------
      <br />
      <br />
      <table
        style={{
          fontFamily: "Arial",
          fontSize: "11px",
          padding: "2mm",
          width: "80mm",
        }}
      >
        <tr>
          <td>NO METER</td>
          <td>: {id_meteran}</td>
        </tr>
        <tr>
          <td>SN</td>
          <td>: {sn}</td>
        </tr>
        <tr>
          <td>IDPEL</td>
          <td>: {id_pelanggan}</td>
        </tr>
        <tr>
          <td>NAMA</td>
          <td>: {nama}</td>
        </tr>
        <tr>
          <td>TARIF/DAYA</td>
          <td>: {stand_meter}</td>
        </tr>
        <tr>
          <td>NO REF</td>
          <td>: {pln_ref}</td>
        </tr>
        <tr>
          <td>RP BAYAR</td>
          <td>: Rp.{harga}</td>
        </tr>
        <tr>
          <td>RP Token</td>
          <td>: Rp.{rp_token}</td>
        </tr>
        <tr>
          <td>METERAI</td>
          <td>: {materai}</td>
        </tr>
        <tr>
          <td>PPn</td>
          <td>: Rp.{ppn}</td>
        </tr>
        <tr>
          <td>PPj</td>
          <td>: Rp.{ppj}</td>
        </tr>
        <tr>
          <td>Stroom/Token</td>
          <td>: {token}</td>
        </tr>
        <tr>
          <td>ADMIN BANK</td>
          <td>: Rp.{admin}</td>
        </tr>
        <tr>
          <td>Total Harga</td>
          <td>: Rp.{total}</td>
        </tr>
      </table>
      <br />
      <br />
      <center>
        <br />
        <br />
        Tanggal Beli : {formattedDate}
      </center>
      <br />
    </div>
  );
}
