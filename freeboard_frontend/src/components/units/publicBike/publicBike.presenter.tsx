import BikeMap from "./bikeMap/bikeMap";
import * as S from "./publicBike.styles";

export default function PublicBikeUI() {
  return (
    <S.PublicBike>
      <S.PublicBikeSubTitleSection>🚲🌉🚴‍♀️</S.PublicBikeSubTitleSection>
      <S.PublicBikeTitleSection>서울시 따릉이 현황</S.PublicBikeTitleSection>
      <S.PublicBikeSection>
        <S.PublicBikeMapArticle>
          <BikeMap />
        </S.PublicBikeMapArticle>
      </S.PublicBikeSection>
    </S.PublicBike>
  );
}
