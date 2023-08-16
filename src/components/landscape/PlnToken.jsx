import React from "react";

export default function PlnToken({ data }) {
  let { tgl_entri, harga } = data[0];
  const {
    nama,
    id_meteran,
    id_pelanggan,
    rp_token,
    token,
    stand_meter,
    admin,
    ppn,
    ppj,
    materai,
  } = data[0].tambahan;
  let total = parseInt(harga) + parseInt(admin);
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
        <td width="30%" valign="top">
          <b>STRUK PEMBELIAN TOKEN PLN</b>
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
              <td>&nbsp; {tanggal}</td>
            </tr>
            <tr>
              <td>NO METER</td>
              <td>:</td>
              <td>&nbsp; {id_meteran}</td>
            </tr>
            <tr>
              <td>IDPEL</td>
              <td>:</td>
              <td>&nbsp; {id_pelanggan}</td>
            </tr>
            <tr>
              <td>NAMA</td>
              <td>:</td>
              <td>&nbsp; {nama}</td>
            </tr>
            <tr>
              <td>TRF/DAYA</td>
              <td>:</td>
              <td>&nbsp; {stand_meter}</td>
            </tr>
            <tr>
              <td>RP TOKEN</td>
              <td>:</td>
              <td>&nbsp; Rp {rp_token}</td>
            </tr>
            <tr>
              <td>RP NOMINAL</td>
              <td>:</td>
              <td>&nbsp; Rp. {harga}</td>
            </tr>
            <tr>
              <td>ADMIN</td>
              <td>:</td>
              <td>&nbsp; Rp {admin}</td>
            </tr>
            <tr>
              <td>
                <b>TOKEN</b>
              </td>
              <td>:</td>
              <td>&nbsp; {token}</td>
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
                style={{
                  fontSize: "8px",
                }}
              ></td>
            </tr>
            <tr>
              <td
                colSpan="5"
                align="center"
                style={{
                  fontSize: "12px",
                }}
              >
                <b>STRUK PEMBELIAN LISTRIK PRABAYAR</b>
                <br />
                <br />
              </td>
            </tr>
            <tr>
              <td width="20%">NO METER </td>
              <td>:&nbsp;&nbsp; {id_meteran}</td>
              <td width="15%">ADMIN</td>
              <td width="2%">:&nbsp;&nbsp;Rp {admin}</td>
              <td width="15%" align="right"></td>
            </tr>
            <tr>
              <td>IDPEL </td>
              <td>:&nbsp;&nbsp;{id_pelanggan}</td>
              <td>METERAI </td>
              <td>:&nbsp;&nbsp;Rp{materai}</td>
              <td align="right"></td>
            </tr>
            <tr>
              <td>NAMA </td>
              <td>:&nbsp;&nbsp; {nama}</td>
              <td>PPN </td>
              <td>:&nbsp;&nbsp;Rp {ppn}</td>
              <td align="right"></td>
            </tr>
            <tr>
              <td>TARIF/DAYA </td>
              <td>:&nbsp;&nbsp;{stand_meter}</td>
              <td>PPJ</td>
              <td>:&nbsp;&nbsp;Rp{ppj}</td>
              <td align="right"></td>
            </tr>
            <tr>
              <td>JML KWH </td>
              <td>:&nbsp;&nbsp; -</td>
              <td>RP TOKEN </td>
              <td>:&nbsp;&nbsp;Rp{rp_token}</td>
              <td align="right"></td>
            </tr>
            <tr>
              <td>RP NOMINAL </td>
              <td>:&nbsp;&nbsp;Rp{harga}</td>
              <td>RP BAYAR </td>
              <td>:&nbsp;&nbsp;Rp{total}</td>
              <td align="right"></td>
            </tr>
            <tr>
              <td
                colSpan="5"
                className="token"
                align="left"
                style={{
                  fontSize: "12px",
                }}
              ></td>
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
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
}
