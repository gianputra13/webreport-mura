import React from "react";
import axios from "axios";

export default function PrintButton({ onData, kode, cetak }) {
  //handle click tombol search
  const handleClick = (e) => {
    const url = "https://apicetak.murapay.id:9878/api/print";
    e.preventDefault();
    axios.post(url, { kodetrx: kode }).then((res) => {
      onData(res.data.data);
    });
  };

  return (
    <button
      onClick={(e) => handleClick(e)}
      type="button"
      title="Cetak ukuran 80mm untuk printer kasir/bluetooth"
      className="btn btn-outline-primary cetak mt-1 me-1"
      style={{
        "--bs-btn-padding-y": ".25rem",
        "--bs-btn-padding-x": ".5rem",
        "--bs-btn-font-size": ".75rem",
      }}
    >
      {cetak === "potrait" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bluetooth"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="m8.543 3.948 1.316 1.316L8.543 6.58V3.948Zm0 8.104 1.316-1.316L8.543 9.42v2.632Zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827L7.133 8.01ZM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99C4.407 0 2 1.655 2 8.01 2 14.344 4.407 16 7.904 16Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-printer"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
          <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
      )}
    </button>
  );
}
