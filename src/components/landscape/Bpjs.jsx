import React from "react";

export default function Bpjs({ data }) {
  const { tgl_entri, tujuan, sn } = data[0];
  const { nama, tagihan, admin, periode, cbg, peserta, total_tagihan } =
    data[0].tambahan;

  return (
    <table
      width="800"
      border="0"
      style={{
        fontFamily: "Arial",
        fontSize: "11px",
        padding: " 0 0 0 0",
        margin: "0 auto",
      }}
    >
      <tr align="center">
        <td colSpan="7" align="center">
          <h2>Struk Pembayaran BPJS Kesehatan</h2>
        </td>
      </tr>
      <tr>
        <td width="200">Tanggal</td>
        <td>:</td>
        <td width="200">{tgl_entri}</td>
        <td width="200"></td>
        <td width="200">Periode</td>
        <td>:</td>
        <td width="200"> {periode} Bulan</td>
      </tr>
      <tr>
        <td width="200">Cabang</td>
        <td>:</td>
        <td width="200">{cbg}</td>
        <td></td>
        <td width="200">Jumlah Peserta</td>
        <td>:</td>
        <td width="200"> {peserta} orang</td>
      </tr>
      <tr>
        <td width="200">ID Pelanggan</td>
        <td>:</td>
        <td width="200">{tujuan}</td>
        <td></td>
        <td width="200">Tagihan</td>
        <td>:</td>
        <td width="200">Rp.{tagihan}</td>
      </tr>
      <tr>
        <td width="200">Nama</td>
        <td>:</td>
        <td width="200">{nama}</td>
        <td></td>
        <td width="200">Admin Bank</td>
        <td>:</td>
        <td width="200">Rp.{admin}</td>
      </tr>
      <tr>
        <td width="200">Total Bayar</td>
        <td>:</td>
        <td width="200">Rp.{total_tagihan}</td>
        <td></td>
        <td width="200">SN</td>
        <td>:</td>
        <td width="200">{sn}</td>
      </tr>
      <tr>
        <td colSpan="7" align="center">
          <br />
          Simpanlah Struk ini sebagai bukti pembayaran anda.
          <br />
          Struk ini merupakan dokumen elektronik dan alat bukti hukum yang sah
          (PASAL 5 AYAT 1 UU ITE)
        </td>
      </tr>
      <tr>
        <td colSpan="7" align="center">
          <hr />
        </td>
      </tr>
    </table>
  );
}
