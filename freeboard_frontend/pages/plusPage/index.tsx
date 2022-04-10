import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [station, setStation] = useState<string[]>([]);
  const [bikeCnt, setBikeCnt] = useState<string[]>([]);

  useEffect(() => {
    const aaa = async () => {

        const result: any = await axios.get("http://spartacodingclub.shop/sparta_api/seoulbike");
        const k = result.data.getStationList.row
        k.map((el:any) => (
          setStation((prev) => [...prev, el.stationName]),
          setBikeCnt((prev)=> [...prev, el.parkingBikeTotCnt])
        ))

          console.log(station)
       
        
        // setBikeCnt(result.data.getStationList.row[1].parkingBikeTotCnt)

    };
    aaa();
    
  }, []);

  return (
    <div>
      <span>
        {station.map((el, index) => (
          <span key={index}>
            <span>{el}</span>
          </span>
        ))}
      </span>
          <span>
        {bikeCnt.map((el, index) => (
          <span key={index}>
            <span>{el}</span>
          </span>
        ))}
      </span>
    </div>
  );
}
