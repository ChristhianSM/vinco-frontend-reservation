import styled from '@emotion/styled'
import React from 'react'
import { Featured } from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperty/FeaturedProperty'
import Footer from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import { Navbar } from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'

export const HomeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`
export const HomeTitle = styled.h1`
  width: 1024px;
  font-size: 20px;
`
export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HomeContainer>
        <Featured />
        <HomeTitle> Browse by property type </HomeTitle>
        <PropertyList />
        <HomeTitle> Homes guests love </HomeTitle>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </HomeContainer>
    </>
  )
}
