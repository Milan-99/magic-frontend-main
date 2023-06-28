import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout,Card,CardBody,Skeleton } from '@pancakeswap-libs/uikit'

import Page from 'components/layout/Page'
// import FarmStakingCard from './components/FarmStakingCard'

// import CakeStats from './components/CakeStats'
// import TotalValueLockedCard from './components/TotalValueLockedCard'
// import ReferralCard from './Components/Referralcard'
// import TwitterCard from './components/TwitterCard'


// import React from 'react'
// import styled from 'styled-components'
// import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../state/hooks'
// import CardValue from './CardValue'
import { useWallet } from '@binance-chain/bsc-use-wallet'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const ReferralCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const { account } = useWallet()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          Bring your friends to daytona.finance and earn commission rewards
        </Heading>
        <>
          <Text color="textSubtle" mb="24px">
            Earn 25% of the deposit fee for all deposits that use your referral link to join the community
          </Text>
        </>
        <>
          <Text color="textSubtle">Your Referral link:</Text>
        </>
        <>{account && <Text color="textSubtle">{`https://daytona.finance/?referral=${account}`}</Text>}</>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

// export default ReferralCard


const Hero = styled.div`
  align-items: center;

  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 8px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const StyledImage = styled.img`
  width: 100%;
  max-width: 250px; // Adjust this value according to your needs
  height: auto;

  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 250px; // Adjust this value according to your needs
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 12;
    }
  }
`

const Referral: React.FC = () => {
  return (
    <Page>
      {/* <Hero>
        <StyledImage src={`${process.env.PUBLIC_URL}/images/LogoBig.png`} alt="Daytona.Finance" />
        <Text>Stake, Earn, and Cruise On Pulse</Text>
      </Hero> */}
      <div>
        <Cards>
          {/*
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
           */}
          <ReferralCard />
          {/* <h1>Hello</h1> */}
        </Cards>
      </div>
    </Page>
  )
}

export default Referral
