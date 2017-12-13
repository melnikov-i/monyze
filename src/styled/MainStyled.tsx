import styled, { StyledFunction } from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  MainMenuLinkSpanProps,
  DevicesMenuLayoutProps,
  DevicesButtonProps,
} from '@src/interfaces';

const MainMenuLinkSpanFunction: StyledFunction<MainMenuLinkSpanProps> =
  styled.span;

const MainMenuFakeLinkFunction: StyledFunction<DevicesMenuLayoutProps> = 
  styled.div;

// const MainMenuLayoutFunction: StyledFunction<DevicesMenuLayoutProps> =
//   styled.ul;

const DevicesMenuLayoutFunction: StyledFunction<DevicesMenuLayoutProps> =
  styled.ul;

// const DevicesMenuLinkSpanWrapperFunction: StyledFunction<DevicesMenuLayoutProps> =
//   styled.div;

const IsOpenButtonFunction: StyledFunction<DevicesButtonProps> =
  styled.button;

const HeaderProfile = require('@src/images/HeaderProfile');
const Logo = require('@src/images/Logo');

import {
  SMALL_SCREEN_MAX,
  MIDDLE_SCREEN_MAX,
  MIDDLE_SCREEN_MIN,
  MENU_LAYOUT_BIG_WIDTH,
  MENU_LAYOUT_MIDDLE_WIDTH,
  MENU_LAYOUT_SMALL_WIDTH,
  MENU_LOGO_HEIGHT,
  // MAIN_MENU_BIG_WIDTH,
  // MAIN_MENU_MIDDLE_WIDTH,
  // DEVICES_MENU_MIDDLE_WIDTH,
  // DEVICES_MENU_BIG_WIDTH,
  // DEVICES_LINK_HEADER,
  BIG_MAIN_LINK_HEIGHT,
  FA_BIG_FONT_SIZE,
  FA_SMALL_FONT_SIZE,
  TOP_HEIGHT,
  FOOTER_HEIGHT,
} from '@src/styled';

export const MainLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainMenu = styled.div`
  width: ${ MENU_LAYOUT_BIG_WIDTH };
  height: 100%;
  background-color: #2f4050;
  position: fixed;
  top: 0;
  left: 0;
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: ${ MENU_LAYOUT_MIDDLE_WIDTH };
    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      width: ${ MENU_LAYOUT_MIDDLE_WIDTH };
      margin-left: -${ MENU_LAYOUT_MIDDLE_WIDTH };
    }
`;

export const SmallMenuButton = IsOpenButtonFunction`
  display: none;
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      display: block;
      position: fixed;
      top: 15px;
      left: 20px;
      width: 30px;
      height: 40px;
      line-height: 40px;
      margin-top: 10px;
      background-color: #19aa8d;
      border-radius: 4px;
    }
`;

export const MainMenuLogoWrapper = styled.div`
  width: 100%;
  height: ${ MENU_LOGO_HEIGHT };
  background-image: url( ${ HeaderProfile } );
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 25px;
  box-sizing: border-box;
  @media screen 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      background-image: none;
      height: 30px;
      padding: 0;
    }
`;
  // @media screen
  //   and (max-width: ${ SMALL_SCREEN_MAX }) {
  //     background-image: none;
  //     height: 30px;
  //     padding: 0;
  //   }

export const MainMenuLogo = styled.div`
  width: 100%;
  height: 100%;
  background-image: url( ${ Logo } );
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 60%;
  @media screen 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      background-image: none;
      &::before {
        content: "Monyze";
        display: block;
        font-size: 16px;
        font-weight: 600;
        height: 70px;
        line-height: 70px;
        color: #fff;
        text-align: center;
      }
    }
`;
  // @media screen
  //   and (max-width: ${ SMALL_SCREEN_MAX }) {
  //     display: none;
  //   }

export const MainMenuLayout = styled.ul`
  width: 100%;
  margin-top: 10px;
  @media screen 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      margin-top: 40px;
      padding-top: 5px;
    }
`;

export const MainMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
  @media screen
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      position: relative;
    }
`;

export const MainMenuLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #a7b1c2;
  &::before {
    content: "";
    display: inline-block;
    vertical-align: top;
    width: 5px;
    height: ${ BIG_MAIN_LINK_HEIGHT };
  }
`;

export const MainMenuFakeLink = MainMenuFakeLinkFunction`
  color: ${ 
    props => (
      props.isOpened
      ? '#fff'
      : '#a7b1c2'
    )
  };
  background-color: ${
    props =>
      props.isOpened
      ? '#293846'
      : 'transparent'
  };
  position: relative;
  cursor: pointer;
  &::selection {
    background: transparent;
  }
  &::before {
    content: "";
    display: inline-block;
    vertical-align: top;
    width: 5px;
    height: ${ BIG_MAIN_LINK_HEIGHT };
    background-color: ${
      props =>
        props.isOpened
        ? '#19aa8d'
        : 'transparent'
    };
  }
`;

export const MainMenuLinkSpan = MainMenuLinkSpanFunction`
  height: ${ BIG_MAIN_LINK_HEIGHT };
  line-height: ${ BIG_MAIN_LINK_HEIGHT };
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
  vertical-align: top;
  &::selection {
    background: transparent;
  }
  &:hover {
    color: #fff;
  }
  &::before {
    content: "${ (props) => props.icon }";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_SMALL_FONT_SIZE };
    margin-left: 14px;
    margin-right: 6px;
  }
  @media screen
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      font-size: 0;
      &::before {
        font-size: ${ FA_BIG_FONT_SIZE };
        margin-left: 10px;
        margin-right: 0;
      }
    }
`;

export const DevicesMenuLayout = DevicesMenuLayoutFunction`
  display: ${
    props => 
      props.isOpened
      ? 'block'
      : 'none'
  };
  overflow: hidden;
  margin-right: 5px;
  @media screen 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      background-color: #2f4050;
      position: absolute;
      left: ${ MENU_LAYOUT_MIDDLE_WIDTH };
      top: 0;
      min-width: 300%;
      padding-right: 5px;
    }
`;

export const DoOpenDevices = IsOpenButtonFunction`
  width: 30px;
  height: 30px;
  background-color: ${
    props => (
      props.isOpened
      ? '#293846'
      : '#2f4050'
    )
  };
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 10px;
  &::before {
    content: "${
      props => (
        props.isOpened 
        ? "\f078" 
        : "\f053"
      )
    }";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_SMALL_FONT_SIZE };
    color: #a7b1c2;
    }
  }
  @media screen 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      display: none;
    }
`;

export const DevicesMenuLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #a7b1c2;
  position: relative;
`;

export const DevicesMenuLinkMiddleClother = styled.div`
  display: none;
  @media screen 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
`;

export const DevicesMenuLinkSpan = MainMenuLinkSpan.extend`
  white-space: nowrap;
  &::before {
    margin-left: 40px;
  }
  @media screen
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: 100%;
      &:hover {
        color: #fff;
        background-color: #293846;
      }
      font-size: 13px;
      &::before {
        margin-left: 20px;
        margin-right: 10px;
      }
    }
`;

export const MainPage = styled.div`
  width: calc(100% - ${ MENU_LAYOUT_BIG_WIDTH });
  margin-left: ${ MENU_LAYOUT_BIG_WIDTH };
  height: 100%;
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: calc(100% - ${ MENU_LAYOUT_MIDDLE_WIDTH });
      margin-left: ${ MENU_LAYOUT_MIDDLE_WIDTH };
    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      width: 100%;
      margin-left: ${ MENU_LAYOUT_SMALL_WIDTH };
    }
`;

export const MainTop = styled.div`
  width: 100%;
  height: ${ TOP_HEIGHT };
  background-color: #f3f3f3;
  border-bottom: 1px solid #e7eaec;
  box-sizing: border-box;
`;

export const MainContent = styled.div`
  width: 100%;
  min-height: calc(100% - ${ TOP_HEIGHT } - ${ FOOTER_HEIGHT });
  background-color: #fff;
`;

export const MainFooter = styled.div`
  width: 100%;
  height: ${ FOOTER_HEIGHT };
  box-sizing: border-box;
  border-top: 1px solid #e7eaec;
`;