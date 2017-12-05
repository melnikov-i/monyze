import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import {
  MainLayout,
  MainPage,
  MainTop,
  MainContent,
  MainFooter,
  MainMenu,
  MainMenuLayout,
  MainMenuItem,
  MainMenuLink,
  MainMenuLinkIcon,
  MainMenuLogoWrapper,
  MainMenuLogo,
} from '@src/styled';

import {
  Devices,
  PageOverview,
} from '@src/containers';

interface MainProps {

}

export const Main: React.SFC<MainProps> = (props) => {
  return (
    <Router hashType={'slash'} basename={'/'}>
      <MainLayout>      

        <MainMenu>
          <MainMenuLogoWrapper>
            <MainMenuLogo></MainMenuLogo>
          </MainMenuLogoWrapper>
          <MainMenuLayout>
            <MainMenuItem>            
              <MainMenuLink
                to={'/overview'}
                activeClassName={'activeMainMenuItem'}
              ><MainMenuLinkIcon value={'\f0e8'} />Обзор Системы</MainMenuLink>
            </MainMenuItem>
            <MainMenuItem>
              <MainMenuLink
                to={'/devices'}
                activeClassName={'activeMainMenuItem'}
              ><MainMenuLinkIcon value={'\f233'} />Устройства</MainMenuLink>
            </MainMenuItem>
            <MainMenuItem>
              <MainMenuLink
                to={'/settings'}
                activeClassName={'activeMainMenuItem'}
              ><MainMenuLinkIcon value={'\f013'} />Настройка</MainMenuLink>
            </MainMenuItem>
          </MainMenuLayout>
        </MainMenu>
        <MainPage>
          <MainTop></MainTop>
          <MainContent>
            <Switch>
              <Route exact path="/overview" component={PageOverview} />
              <Route exact path={'/devices'} component={Devices} />
              <Route exact path={'/'} component={PageOverview} />
            </Switch>
          </MainContent>
          <MainFooter></MainFooter>        
        </MainPage>      
      </MainLayout>
    </Router>
  );
}