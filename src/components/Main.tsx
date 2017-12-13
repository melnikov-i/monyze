import * as React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import {
  MainMenuLinksInterface,
  DevicesMenuLayoutInterface,
} from '@src/interfaces';

import {
  MainLayout,
  MainMenu,
  MainMenuLogoWrapper,
  MainMenuLogo,
  // MainMenuWrapper,
  MainMenuLayout,
  MainMenuItem,
  MainMenuLink,
  MainMenuFakeLink,
  MainMenuLinkSpan,
  DevicesMenuLayout,
  DoOpenDevices,
  DevicesMenuLink,
  DevicesMenuLinkMiddleClother,
  DevicesMenuLinkSpan,
  MainPage,
  MainTop,
  SmallMenuButton,
  MainContent,
  MainFooter,
} from '@src/styled';

import {
  // DevicesLoadable,
  Devices,
  PageOverview,
} from '@src/containers';

interface MainProps {
  MainMenuWasRequestedFromAPI: boolean,
  MainMenuModel: MainMenuLinksInterface[],
  DevicesMenuWasRequestedFromAPI: boolean,
  DevicesMenuModel: MainMenuLinksInterface[],
  isOpened: DevicesMenuLayoutInterface['isOpened'],
  isMainMenuOpened: DevicesMenuLayoutInterface['isOpened'],
  makeMainMenuRequestToAPI: () => any,
  makeDevicesMenuRequestToAPI: () => any,
  doDevicesMenuViewSwitch: () => any,
  doOpenMainMenuWhenSmallScreenSwitch: () => any,
}

export const Main: React.SFC<MainProps> = (props) => {
  const {
    MainMenuWasRequestedFromAPI,
    MainMenuModel,
    DevicesMenuWasRequestedFromAPI,
    DevicesMenuModel,
    isOpened,
    isMainMenuOpened,
    makeMainMenuRequestToAPI,
    makeDevicesMenuRequestToAPI,
    doDevicesMenuViewSwitch,
    doOpenMainMenuWhenSmallScreenSwitch,
  } = props;

  const getMainMenu = (): MainMenuLinksInterface[] => {
    if ( !MainMenuWasRequestedFromAPI ) {
      makeMainMenuRequestToAPI();
    }
    return MainMenuModel;
  };

  const mainMenu = getMainMenu();

  const getDevicesMenu = (): MainMenuLinksInterface[] => {
    if ( !DevicesMenuWasRequestedFromAPI ) {
      makeDevicesMenuRequestToAPI();
    }
    return DevicesMenuModel;
  };

  const devicesMenu = getDevicesMenu();

  const doOpenDevicesHandler = () => {
    doDevicesMenuViewSwitch();
  }

  console.log('[isMainMenuOpened]',isMainMenuOpened);

  const doOpenMainMenuWhenSmallScreenHandler = () => {
    doOpenMainMenuWhenSmallScreenSwitch();
  }

  return (
    <Router hashType={'slash'} basename={'/'}>
      <MainLayout>
        <MainMenu>
          <SmallMenuButton 
          onClick={doOpenMainMenuWhenSmallScreenHandler} 
          isOpened={isMainMenuOpened} />
          <MainMenuLogoWrapper>
            <MainMenuLogo></MainMenuLogo>
          </MainMenuLogoWrapper>
            <MainMenuLayout>
              {
                mainMenu.map((e, i) => {
                  if ( e.to !== 'devices' ) {
                    return (
                      <MainMenuItem key={i}>
                        <MainMenuLink
                          to={'/' + e.to}
                          activeClassName={'activeMainMenuItem'}
                          title={e.value}
                        >
                          <MainMenuLinkSpan
                            icon={ '\\' + e.icon }
                          >
                            { e.value }
                          </MainMenuLinkSpan>
                        </MainMenuLink>
                      </MainMenuItem>
                    );
                  } else {
                    return (
                      <MainMenuItem key={i}>
                        <MainMenuFakeLink
                          isOpened={isOpened}
                          onClick={doOpenDevicesHandler}
                        >
                          <MainMenuLinkSpan
                            icon={ '\\' + e.icon }
                          >
                            { e.value }
                            <DoOpenDevices
                              isOpened={isOpened}
                            ></DoOpenDevices>
                          </MainMenuLinkSpan>                          
                        </MainMenuFakeLink>
                        <DevicesMenuLayout
                          isOpened={isOpened}
                        >
                          <MainMenuItem>
                            <DevicesMenuLink
                              to={'/devices'}
                              activeClassName={'activeDevicesMenuItem'}
                              title={'Все устройства'}
                            >
                              <DevicesMenuLinkMiddleClother
                                onClick={doOpenDevicesHandler}
                              /> 
                              <DevicesMenuLinkSpan
                                icon={'\\f069'}
                              >
                                { 'Все устройства' }
                              </DevicesMenuLinkSpan>
                            </DevicesMenuLink>
                          </MainMenuItem>
                          {
                            devicesMenu.map((e, i) => {
                              return (
                                <MainMenuItem key={i}>
                                  <DevicesMenuLink
                                    to={'/' + e.to}
                                    activeClassName={'activeDevicesMenuItem'}
                                    title={e.value}
                                  >
                                    <DevicesMenuLinkMiddleClother
                                      onClick={doOpenDevicesHandler}
                                    />
                                    <DevicesMenuLinkSpan
                                      icon={'\\' + e.icon}
                                    >
                                      {e.value}
                                    </DevicesMenuLinkSpan>
                                  </DevicesMenuLink>
                                </MainMenuItem>
                              );
                            })
                          }
                        </DevicesMenuLayout>
                      </MainMenuItem>
                    )
                  }
                })
              }
            </MainMenuLayout>
        </MainMenu>
        <MainPage>
          <MainTop>
            
          </MainTop>
          <MainContent>
            <Switch>
              <Route
                exact path="/overview"
                component={PageOverview} />
              <Route
                exact path={'/devices'}
                component={Devices} />
              <Route 
                exact path={'/'}
                component={PageOverview} />
            </Switch>
          </MainContent>
          <MainFooter></MainFooter>
        </MainPage>      
      </MainLayout>
    </Router>
  );
};
            // <DevicesMenuLayout isOpened={isOpened}>
            //   <DoOpenDevices
            //     onClick={doOpenDevicesHandler}
            //     isOpened={isOpened}
            //   ></DoOpenDevices>
            //   {
            //     getDevicesMenu().map((e, i) => {
            //       return (
            //         <MainMenuItem key={i}>
            //           <DevicesMenuLink
            //             to={'/devices/' + e.to}
            //             activeClassName={'activeDevicesMenuItem'}
            //             title={e.value}
            //           >
            //             <DevicesMenuLinkSpan 
            //               isOpened={isOpened}
            //               icon={'\\' + e.icon}
            //             >
            //               {e.value}
            //             </DevicesMenuLinkSpan>
            //           </DevicesMenuLink>
            //         </MainMenuItem>
            //       );
            //     })
            //   }
            // </DevicesMenuLayout>