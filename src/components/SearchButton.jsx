import React, { useState } from "react";

export default function SearchButton(props) {
  const today = new Date().toISOString().substr(0, 10);
  const [data, setData] = useState({
    tujuan: "",
    start_date: today,
    end_date: today,
    page: 1,
    per_page: 3,
  });

  //handle search value
  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  // handle search dengan klik enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      props.onSubmit(
        data.tujuan,
        data.start_date,
        data.end_date,
        data.page,
        data.per_page
      );
    }
  };

  const submit = (e, page = 1) => {
    e.preventDefault();
    props.onSubmit(
      data.tujuan,
      data.start_date,
      data.end_date,
      page,
      data.per_page
    );
  };

  return (
    <div className="row py-2">
      <div className="col-sm-8">
        <img src={"./mura.png"} className="image" alt="" />
      </div>
      <div className="col-sm-4 pt-1">
        <div className="row">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search No Tujuan.."
              id="tujuan"
              onChange={(e) => handle(e)}
              value={data.tujuan}
              onKeyPress={handleKeyPress}
              required
            />
            <button
              className="btn btn-primary bg-header submit"
              type="submit"
              onClick={(e) => submit(e)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-sm-6 mt-2">
            <input
              type="date"
              placeholder="Tanggal Awal"
              id="start_date"
              className="form-control datepicker"
              onChange={(e) => handle(e)}
              value={data.start_date}
              required
            />
          </div>
          <div className="col-sm-6 mt-2">
            <input
              type="date"
              placeholder="Tanggal Ahkir"
              id="end_date"
              className="form-control datepicker"
              onChange={(e) => handle(e)}
              value={data.end_date}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
