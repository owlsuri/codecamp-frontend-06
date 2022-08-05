import { useEffect, useState } from "react";
import axios from "axios";
import PublicBikeUI from "./publicBike.presenter";
import { useRecoilState } from "recoil";
import { publicBikeState } from "../../../commons/store";

export default function PublicBike() {
  const [, setPublicBike] = useRecoilState(publicBikeState);

  const bikeData = async () => {
    await axios
      .get(
        "http://openapi.seoul.go.kr:8088/524a4b4b536f776c33336d65514c65/json/bikeList/1/1000/"
      )
      .then((res) => {
        setPublicBike(res);
      });
  };

  useEffect(() => {
    bikeData();
  }, []);

  return <PublicBikeUI />;
}
