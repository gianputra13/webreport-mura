import React from "react";

export default function Header() {
  return (
    <div className="container-fluid">
      <div className="row py-5 bg-header"></div>
      <div className="row justify-content-center">
        <div className="col-sm-10 shadow-sm rounded py-2 title borderTitle">
          <div className="row text-center py-1">
            <div className="col-sm">
              <h2>Cetak Struk</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
