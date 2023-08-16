import React from "react";

export default function Pln({ data }) {
  const { tujuan, tgl_entri } = data[0];
  const {
    nama,
    tarif_daya,
    stand_meter,
    periode,
    admin,
    tagihan,
    total_tagihan,
  } = data[0].tambahan;
  const denda = data[0].tambahan.denda ? data[0].tambahan.denda : 0;
  // const date = new Date(tgl_entri);
  // const day = String(date.getDate()).padStart(2, "0");
  // const month = String(date.getMonth() + 1).padStart(2, "0");
  // const year = date.getFullYear();
  // // const tanggal = `${day}-${month}-${year}`;
  const [tanggal] = tgl_entri.split(" ");

  return (
    <table
      className="page-break"
      style={{
        fontFamily: "Arial",
        fontSize: "11px",
        padding: " 0 0 0 0",
        margin: "0 auto",
      }}
    >
      <tr>
        <td width="25%" valign="top">
          <b>STRUK PEMBAYARAN PLN</b>
          <br />
          <br />
          <table
            cellSpacing="1"
            cellPadding="0"
            style={{
              fontFamily: "Arial",
              fontSize: "10px",
            }}
          >
            <tr>
              <td>TGL BELI</td>
              <td>:</td>
              <td>&nbsp;&nbsp;{tanggal}</td>
            </tr>
            <tr>
              <td>IDPEL</td>
              <td>:</td>
              <td>&nbsp;&nbsp;{tujuan}</td>
            </tr>
            <tr>
              <td>NAMA</td>
              <td>:</td>
              <td>&nbsp;&nbsp;{nama}</td>
            </tr>
            <tr>
              <td>TRF/DAYA</td>
              <td>:</td>
              <td>&nbsp;{tarif_daya}</td>
            </tr>
            <tr>
              <td>PERIODE</td>
              <td>:</td>
              <td>&nbsp;{periode}</td>
            </tr>
            <tr>
              <td>ST METER</td>
              <td>:</td>
              <td>&nbsp;{stand_meter}</td>
            </tr>
            <tr>
              <td>ADMIN</td>
              <td>:</td>
              <td>&nbsp;&nbsp;Rp.{admin}</td>
            </tr>
            <tr>
              <td>TAGIHAN</td>
              <td>:</td>
              <td>&nbsp;&nbsp;Rp.{tagihan}</td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td>:</td>
              <td>&nbsp;&nbsp;Rp.{total_tagihan}</td>
            </tr>
          </table>
        </td>
        <td width="5%"></td>
        <td>
          <table
            width="450"
            border="0"
            cellSpacing="1"
            cellPadding="0"
            style={{
              fontFamily: "Arial",
              fontSize: "11px",
            }}
          >
            <tr>
              <td
                colSpan="5"
                align="center"
                style={{
                  fontSize: "12px",
                }}
              >
                <b>STRUK PEMBAYARAN PLN PASCA BAYAR</b>
                <br />
                <br />
              </td>
            </tr>
            <tr>
              <td width="20%">ID PELANGGAN </td>
              <td>:&nbsp;&nbsp;{tujuan}</td>
              <td width="15%">TANGGAL</td>
              <td width="20%">:&nbsp;&nbsp;{tanggal}</td>
              <td align="right"></td>
            </tr>
            <tr>
              <td>NAMA </td>
              <td>:&nbsp;&nbsp;{nama}</td>
              <td>ADMIN </td>
              <td>:&nbsp;&nbsp;Rp.{admin}</td>
              <td align="right"></td>
            </tr>
            <tr>
              <td>TARIF/DAYA </td>
              <td>:&nbsp;{tarif_daya}</td>
              <td>Denda </td>
              <td>:&nbsp;&nbsp;Rp.{denda}</td>
              <td align="right"></td>
            </tr>
            <tr>
              <td>STAND METER </td>
              <td>:&nbsp;{stand_meter}</td>
              <td>TAGIHAN </td>
              <td>:&nbsp;&nbsp;Rp.{tagihan}</td>
              <td align="right"></td>
            </tr>
            <tr>
              <td>PERIODE </td>
              <td>:&nbsp;{periode}</td>
              <td>TOTAL </td>
              <td>:&nbsp;&nbsp;Rp.{total_tagihan}</td>
              <td align="right"></td>
            </tr>

            <tr>
              <td
                colSpan="5"
                align="center"
                style={{
                  fontSize: "11px",
                }}
              >
                <br />
                Informasi Hubungi Call Center 123 Atau hubungi PLN Terdekat{" "}
                <br />
                http://www.pln.co.id/
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
}
