import React from "react";

export default function Tagihan({ data }) {
  const { tgl_entri, tujuan, sn } = data[0];
  const { nama, admin, periode, tagihan, total_tagihan } = data[0].tambahan;
  const denda = data[0].tambahan.denda ? data[0].tambahan.denda : 0;
  return (
    <table
      width="800"
      style={{
        fontFamily: "Arial",
        fontSize: "11px",
        padding: " 0 0 0 0",
      }}
    >
      <tr align="center">
        <td colSpan="7">
          <h4>STRUK PEMBAYARAN TAGIHAN</h4>
        </td>
      </tr>
      <tr>
        <td width="15%">Tanggal</td>
        <td>:</td>
        <td width="35%"> {tgl_entri}</td>
        <td>&nbsp;&nbsp;&nbsp;</td>
        <td width="15%">Tagihan</td>
        <td>:</td>
        <td width="35%"> Rp.{tagihan}</td>
      </tr>
      <tr>
        <td width="15%">ID Pelanggan</td>
        <td>:</td>
        <td width="35%"> {tujuan}</td>
        <td>&nbsp;&nbsp;&nbsp;</td>
        <td width="15%">Biaya Admin</td>
        <td>:</td>
        <td width="35%"> Rp.{admin}</td>
      </tr>
      <tr>
        <td width="15%">Atas Nama</td>
        <td>:</td>
        <td width="35%"> {nama}</td>
        <td>&nbsp;&nbsp;&nbsp;</td>
        <td width="15%">Denda</td>
        <td>:</td>
        <td width="35%"> Rp.{denda}</td>
      </tr>
      <tr>
        <td width="15%">Periode</td>
        <td>:</td>
        <td width="35%"> {periode}</td>
        <td>&nbsp;&nbsp;&nbsp;</td>
        <td width="15%">SN</td>
        <td>:</td>
        <td width="35%">{sn}</td>
      </tr>
      <tr>
        <td width="15%">Total Bayar</td>
        <td>:</td>
        <td width="35%"> Rp.{total_tagihan}</td>
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
        <td colSpan="7" align="center"></td>
      </tr>
    </table>
  );
}
