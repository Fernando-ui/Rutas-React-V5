import React from 'react'
import {Route} from 'react-router-dom'
import { DcScreen } from '../components/dcs/DcScreen'
import { LogoutScreen } from '../components/logout/LogoutScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'

export const HomeScreen = () => {
  return (
    <>
    <Navbar/>
         <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/logout" component={LogoutScreen} />
    </>
  )
}
