import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import axios from "axios";
import PrintContent from "./PrintContent";
import PrintContentLandscape from "./PrintContentLandscape";

const PrintWebView = () => {
  const [dataForPrint, setDataForPrint] = useState({});

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
        throw new Error(error);
      }
    };
    printDetail();
  }, [kodetrx, mode]);

  return (
    <Fragment>
      { dataForPrint.length && (
        mode === "potrait" ?
          (<PrintContent data={dataForPrint} />) : 
            (<PrintContentLandscape data={dataForPrint} />)
        )
      }
    </Fragment>
  );
};

export default PrintWebView;
