import styled from "styled-components";

export const MainTitle = styled.h2`
  color: ${(p) => p.theme.colors.primaryTitleColor};
  font-weight: ${(p) => p.theme.fontWeight.bolt};
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 30px;
  font-size: ${(p) => p.theme.fontSizes.xxl};

  @media screen and (min-width: ${(p) => p.theme.breakpoints.beeforeDesktop}) {
    margin-bottom: 50px;
    font-size: ${(p) => p.theme.fontSizes.xxxl};
  }
`;

export const List = styled.ul`
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    flex-basis: calc(100% / 2 - 30px);
    margin-top: -30px;
    margin-left: -30px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    display: flex;
  }
`;

export const Item = styled.li`
  @media screen and (max-width: ${(p) => p.theme.breakpoints.beeforeTablet}) {
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    width: 354px;
    margin-top: 30px;
    margin-left: 30px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 270px;
  }
`;

export const DescriptionWrapper = styled.div`
  /* list-style: inside; */
  font-size: 18px;
  /* Стили по умолчанию для всех дочерних элементов */

  & > * {
    margin-bottom: 10px;
  }

  /* Отменить отступ у последнего дочернего элемента */
  & > *:last-child {
    margin-bottom: 0;
  }
`;
