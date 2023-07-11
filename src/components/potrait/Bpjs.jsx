import React from "react";

export default function Bpjs({ data }) {
  const tgl_entri = data[0].tgl_entri;
  const tujuan = data[0].tujuan;
  const sn = data[0].sn;
  const { nama, tagihan, admin, periode, cbg, peserta, total_tagihan } =
    data[0].tambahan;

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
      <center>
        Pembayaran Tagihan BPJS KESEHATAN
        <br />
        Tgl: {tgl_entri}
        <br />
      </center>
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
          <td>Tgl Bayar</td>
          <td>: {tgl_entri}</td>
        </tr>
        <tr>
          <td>Periode</td>
          <td>: {periode}</td>
        </tr>
        <tr>
          <td>ID PEL</td>
          <td>: {tujuan}</td>
        </tr>
        <tr>
          <td>Nama</td>
          <td>: {nama}</td>
        </tr>
        <tr>
          <td>Cabang</td>
          <td>: {cbg}</td>
        </tr>
        <tr>
          <td>Jumlah Peserta</td>
          <td>: {peserta}</td>
        </tr>
        <tr>
          <td>SN</td>
          <td>: {sn}</td>
        </tr>
        <tr>
          <td>Tagihan</td>
          <td>: Rp.{tagihan}</td>
        </tr>
        <tr>
          <td>Adm Bank</td>
          <td>: Rp.{admin}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>: Rp.{total_tagihan}</td>
        </tr>
        <tr>
          <td colSpan="2"></td>
        </tr>
      </table>
      <br />
      ------------------------------------------------------------------------------
      <br />
      <center>
        Simpanlah Struk ini sebagai
        <br />
        bukti pembayaran anda. Struk ini
        <br />
        merupakan dokumen elektronik dan
        <br /> alat bukti hukum yang sah
        <br />
        (PASAL 5 AYAT 1 UU ITE)
      </center>
      <br />
    </div>
  );
}
