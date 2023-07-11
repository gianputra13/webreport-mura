import React, { useState } from "react";
import PrintButton from "./PrintButton";
import SearchButton from "./SearchButton";
import PrintContent from "./PrintContent";
import ReactDOMServer from "react-dom/server";
import PrintContentLandscape from "./PrintContentLandscape";
import Pagination from "./Pagination";
import axios from "axios";

export default function TableData() {
  const [dataTabel, setDataTabel] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useState({
    tujuan: "",
    start_date: "",
    end_date: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (tujuan, start_date, end_date, page = 1, per_page = 3) => {
    if (!start_date || !end_date || !tujuan) {
      alert("Mohon isi nomer tujuan terlebih dahulu");
      return;
    }

    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    if (startDate > endDate) {
      alert("Tanggal mulai tidak boleh lebih besar dari tanggal akhir.");
      return;
    }
    setDataTabel([]);
    setErrorMessage("");
    setLoading(true);
    const url = "https://apicetak.murapay.id:9878/api/history";
    axios
      .post(url, {
        tujuan,
        start_date,
        end_date,
        page,
        per_page,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          setDataTabel(res.data.data);
          setCurrentPage(res.data.current_page);
          setTotalPages(res.data.total_page);
          setSearchParams({ tujuan, start_date, end_date });
          setLoading(false);
          return;
        } else {
          setLoading(false);
          setErrorMessage(res.data.message);
        }
      })
      .catch((error) => {
        // console.log(error);
        if (error.code === "ERR_NETWORK") {
          setLoading(false);
          setErrorMessage("Terjadi kesalah pada server hubungi CS");
        }
        setLoading(false);
        setErrorMessage(error.response.data.message);
        return;
      });
  };

  //handle klik pagination
  const handlePageChange = (newPage) => {
    const { tujuan, start_date, end_date } = searchParams;
    submit(tujuan, start_date, end_date, newPage);
  };

  //handle klik tombol cetak Potrait
  const handlePrintPotrait = (data) => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(
      "<html><head><title>Print Page</title></head><body>"
    );
    const content = ReactDOMServer.renderToString(<PrintContent data={data} />);
    newWindow.document.write(content);
    newWindow.document.write("</body></html>");
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
  };

  //handle klik tombol cetak Landscape
  const handlePrintLandscape = (data) => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(
      "<html><head><title>Print Page</title></head><body>"
    );
    const content = ReactDOMServer.renderToString(
      <PrintContentLandscape data={data} />
    );
    newWindow.document.write(content);
    newWindow.document.write("</body></html>");
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-sm-12">
          <div className="card shadow-lg">
            <div className="card-header borderCard">
              <div className="row py-2">
                <SearchButton onSubmit={submit} />
              </div>
            </div>
            <div className="card-body mb-5">
              <div className="table-responsive">
                <table
                  className="table table-hover table-bordered"
                  id="myTable"
                >
                  <thead>
                    <tr>
                      <th scope="col">Cetak</th>
                      <th scope="col">Tgl Transaksi</th>
                      <th scope="col">Kode Trx</th>
                      <th scope="col">Kode Produk</th>
                      <th scope="col">Tujuan</th>
                      <th scope="col">Admin</th>
                      <th scope="col">Harga</th>
                      <th scope="col">SN</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="8" className="text-center">
                          <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      Object.keys(dataTabel).map((item, index) => (
                        <tr key={index}>
                          <td>
                            <PrintButton
                              onData={handlePrintPotrait}
                              kode={dataTabel[item].kode}
                              cetak="potrait"
                            />
                            <PrintButton
                              onData={handlePrintLandscape}
                              kode={dataTabel[item].kode}
                              cetak="landscape"
                            />
                          </td>
                          <td>{dataTabel[item].tgl_entri}</td>
                          <td>{dataTabel[item].kode}</td>
                          <td>{dataTabel[item].kode_produk}</td>
                          <td>{dataTabel[item].tujuan}</td>
                          <td>{dataTabel[item].tambahan.admin}</td>
                          <td>{dataTabel[item].harga}</td>
                          <td>{dataTabel[item].sn}</td>
                        </tr>
                      ))
                    )}
                    {errorMessage && (
                      <tr>
                        <td colSpan="8" className="text-center">
                          {errorMessage}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="row mt-4 content-center">
                <div className="col-sm-6">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
