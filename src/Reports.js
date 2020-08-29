import React from 'react'
import { StyledHeadingH2, StyledHeadingH3 } from './styles/StyledHeading'
import { FlexWrapper, FlexInner, FlexItem, StyledContainerNoBg, StyledContainerMain } from './styles/StyledContainer';
import { StyledGraph, StyledGraphLabel, StyledGraphStatus, StyledGraphPercentage } from './styles/StyledGraph'
import { StyledContainerMiniWrapper, StyledContainerMini, StyledFlexContainerMini } from './styles/StyledContainer'
import { StyledTypographyRight, StyledTypography } from './styles/StyledTypography'

const Reports = () => (
  <>
    <StyledHeadingH2>Reports</StyledHeadingH2>


    <StyledContainerMiniWrapper>
      <StyledContainerMini><StyledTypography><span>89</span>Outerwears</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>65</span>Tops</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>-24</span>Shirts</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>89</span>Suits</StyledTypography></StyledContainerMini>

      <StyledContainerMini><StyledTypography><span>89</span>Knitted</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>65</span>Bottoms</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>-24</span>Dresses</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>89</span>Shoes</StyledTypography></StyledContainerMini>

      <StyledContainerMini><StyledTypography><span>89</span>Underwears</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>65</span>Nightwears</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>-24</span>Accessories</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>89</span>Sportswears</StyledTypography></StyledContainerMini>
    </StyledContainerMiniWrapper>

    <FlexWrapper>

      <FlexInner>
        <FlexItem>
          <StyledHeadingH3>Year</StyledHeadingH3>
          <StyledGraph>
            <div>
              <StyledGraphLabel>
                <span>2020</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>51%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>2019</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>17%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>2018</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>19%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>2017</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>8%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>~2016</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>5%</span>
              </StyledGraphPercentage>
            </div>
          </StyledGraph>
        </FlexItem>
      </FlexInner>
      <FlexInner>
        <FlexItem>
          <StyledHeadingH3>Color</StyledHeadingH3>
          <StyledGraph>
            <div>
              <StyledGraphLabel>
                <span>Spring</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>51%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>Summer</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>17%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>Fall</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>19%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>Winter</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>8%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>All Seasons</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>5%</span>
              </StyledGraphPercentage>
            </div>
          </StyledGraph>
        </FlexItem>
      </FlexInner>
      <FlexInner>
        <FlexItem>
          <StyledHeadingH3>Price</StyledHeadingH3>
          <StyledGraph>
            <div>
              <StyledGraphLabel>
                <span>Spring</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>51%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>Summer</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>17%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>Fall</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>19%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>Winter</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>8%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>All Seasons</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>5%</span>
              </StyledGraphPercentage>
            </div>
          </StyledGraph>
        </FlexItem>
      </FlexInner>
      <FlexInner>
        <FlexItem>
          <StyledHeadingH3>Season</StyledHeadingH3>
          <StyledGraph>
            <div>
              <StyledGraphLabel>
                <span>Spring</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>51%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>Summer</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>17%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>Fall</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>19%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>Winter</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>8%</span>
              </StyledGraphPercentage>
            </div>

            <div>
              <StyledGraphLabel>
                <span>All Seasons</span>
              </StyledGraphLabel>
              <StyledGraphStatus>
                <div>
                  <div></div>
                </div>
              </StyledGraphStatus>
              <StyledGraphPercentage>
                <span>5%</span>
              </StyledGraphPercentage>
            </div>
          </StyledGraph>
        </FlexItem>
      </FlexInner>

    </FlexWrapper>
  </>
)

export default Reports;