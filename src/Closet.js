import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from './components/ListItem'
import StyledCard from './styles/StyledCard';
import { StyledHeadingH2 } from './styles/StyledHeading';
import { StyledClosetContainer, Flex } from './styles/StyledContainer'
import { StyledSelectContainer } from './styles/StyledInput';

const Closet = ({ id }) => (
  <>
    <StyledHeadingH2>Closet</StyledHeadingH2>
    {/* <ListItem /> */}
    <Flex>
      <StyledSelectContainer>
        <select>
          <option>Jacket</option>
          <option>Outerwear</option>
          <option>Bottoms</option>
          <option>Tops</option>
          <option>Skirt</option>
          <option>Shirt</option>
          <option>Shoes</option>
          <option>Tanks</option>
        </select>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
          </svg>
        </div>
      </StyledSelectContainer>
      <span>Total: 102</span>
    </Flex>



    <StyledClosetContainer>
      <StyledCard>

        <div>
          <Link to={`/closet/${id}`}><img src="https://ae01.alicdn.com/kf/HTB1BQPcEkCWBuNjy0Faq6xUlXXab.jpg_q50.jpg" alt="" /></Link>
        </div>
        <p><Link to={`/closet/${id}`}>White Butterfly Sleeve Shirt</Link></p>

      </StyledCard>
      <StyledCard>

        <div>
          <Link to={`/closet/${id}`}><img src="https://cdn.grail.bz/images/goods/d/ac1357/ac1357_u.jpg" alt="" /></Link>
        </div>
        <p><Link to={`/closet/${id}`}>White Butterfly Sleeve Shirt</Link></p>
      </StyledCard>

      <StyledCard>
        <div>
          <Link to={`/closet/${id}`}><img src="https://image.vector-park.jp/images/item/original2/171/9020/02/07/171-902002070127_1.jpg?t=1581912553" alt="" /></Link>
        </div>
        <p><Link to={`/closet/${id}`}>The Coldest Sunset</Link></p>
      </StyledCard>

      <StyledCard>
        <div>
          <Link to={`/closet/${id}`}><img src="https://image1.kind.co.jp/images/item/original/8039000237712_1.jpg?t=1591019413" alt="" /></Link>
        </div>
        <p><Link to={`/closet/${id}`}>The Coldest Sunset</Link></p>
      </StyledCard>
      <StyledCard>
        <div>
          <Link to={`/closet/${id}`}><img src="https://image.t-fashion.jp/proportionbd/images/goods/1709-1217229901/z-1709-1217229901_VU.jpg" alt="" /></Link>
        </div>
        <p><Link to={`/closet/${id}`}>The Coldest Sunset</Link></p>
      </StyledCard>
      <StyledCard>
        <div>
          <Link to={`/closet/${id}`}><img src="https://www.gap.co.jp/webcontent/0018/731/545/cn18731545.jpg" alt="" /></Link>
        </div>
        <p><Link to={`/closet/${id}`}>The Coldest Sunset</Link></p>
      </StyledCard>
      <StyledCard>
        <div>
          <Link to={`/closet/${id}`}><img src="https://www.masksjp.com/images/shop/desc/22932415000159c5b41ba748b792e670-w300312.jpg" alt="" /></Link>
        </div>
        <p><Link to={`/closet/${id}`}>The Coldest Sunset</Link></p>
      </StyledCard>
      <StyledCard>
        <div>
          <Link to={`/closet/${id}`}><img src="https://base-ec2if.akamaized.net/w=640,a=0,q=90,u=1/images/item/origin/e3c6515c9814887649277490a1cb4ea6.jpg" alt="" /></Link>
        </div>
        <p><Link to={`/closet/${id}`}>The Coldest Sunset</Link></p>
      </StyledCard>
      <StyledCard>
        <div>
          <Link to={`/closet/${id}`}><img src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/415390/item/goods_02_415390.jpg" alt="" /></Link>
        </div>
        <p><Link to={`/closet/${id}`}>The Coldest Sunset</Link></p>
      </StyledCard>
    </StyledClosetContainer>
  </>
)

export default Closet;