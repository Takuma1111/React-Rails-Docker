import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Skeleton from '@material-ui/lab/Skeleton';
// images
import MainLogo from '../images/logo.png';
import MainCoverImage from '../images/main-cover-image.png';
import HomeImage from '../images/restaurant-image.jpg';

// ログイン時はHomeコンポーネントへ遷移するようにする
// export const Home = () => {
//     return <p>Homeページです</p>
// }



//divタグに対してデザインを指定している 
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;

const MainLogoImage = styled.img`
  height: 90px;
`

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

const MainCover = styled.img`
  height: 600px;
`;
const HomesContentsList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 150px;
  margin-right: 100px;
  margin-left: 100px;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
`;

const HomesContentWrapper = styled.div`
  width: 450px;
  height: 300px;
  padding: 48px;
`;

const HomesImageNode = styled.img`
  width: 100%;
`;

const MainText = styled.p`
  color: black;
  font-size: 18px;
`;

const SubText = styled.p`
  color: black;
  font-size: 12px;
`;


//useEffectでレンダリング時に一回だけfetchRestaurantsと言う
//APIを呼ぶための関数が呼ばれる
//dispatchはreducerを通して間接的にstateを変更させる
export const Home = () => {
  return (
    <Fragment>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
      <HomesContentsList>
        {

              <Link to={`/movies`} style={{ textDecoration: 'none' }}>
                <HomesContentWrapper>
                  <HomesImageNode src={HomeImage} />
                  <MainText>サンプルテキスト</MainText>
                  <SubText>サブテキスト</SubText>
                </HomesContentWrapper>
              </Link>
        }
         {
              <Link to={`/sounds`} style={{ textDecoration: 'none' }}>
                <HomesContentWrapper>
                  <HomesImageNode src={HomeImage} />
                  <MainText>サンプルテキスト</MainText>
                  <SubText>サブテキスト</SubText>
                </HomesContentWrapper>
              </Link>
        }
        {
              <Link to={`/photos`} style={{ textDecoration: 'none' }}>
                <HomesContentWrapper>
                  <HomesImageNode src={HomeImage} />
                  <MainText>サンプルテキスト</MainText>
                  <SubText>サブテキスト</SubText>
                </HomesContentWrapper>
              </Link>
        }
      </HomesContentsList>
      
    </Fragment>
  )
}