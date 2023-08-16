import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import axios from "axios";
import PrintContent from "./PrintContent";
import PrintContentLandscape from "./PrintContentLandscape";
import ErrorNotFound from "./ErrorNotFound";

const PrintWebView = () => {
  const [dataForPrint, setDataForPrint] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const mode = searchParams.get("mode");
  const kodetrx = searchParams.get("kodetrx");

  useEffect(() => {
    const printDetail = async () => {
      try {
        const dataPrint = await axios.post("https://apicetak.murapay.id:9878/api/print", {
          kodetrx,
        });
        setDataForPrint(dataPrint.data.data);
      } catch (error) {
        setIsError(true);
        setErrorMessage(error.response.data.message);
      }
    };
    printDetail();
  }, [kodetrx, mode]);

  return (
    <Fragment>
      {!isError && dataForPrint.length ? (
        dataForPrint.length && (
          mode === "potrait" ?
            (<PrintContent data={dataForPrint} />) : 
              (<PrintContentLandscape data={dataForPrint} />)
          )
      ) : (<ErrorNotFound message={errorMessage} />)}
    </Fragment>
  );
};

export default PrintWebView;
