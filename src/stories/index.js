import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
import { Button, Loading, NoData } from '../components'
import { SuccessfullyOrderedModal } from './modal-successfully-ordered'
import { InsufficientBalanceModal } from './modal-insufficient-balance'
import { BetFailedModal } from './modal-bet-failed'
import { GameExpiredModal } from './modal-game-expired'
import NO_DATA_ORDER_LIST from 'assets/no-data-order-list.png'
import NO_DATA_GAME_LIST from 'assets/no-data-game-list.png'
import NO_DATA_FAVORITE from 'assets/no-data-favorite.png'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Loading', module).add('加载中', () => <Loading />)

storiesOf('NoData', module).add('订单列表为空', () => (
  <NoData
    logo={NO_DATA_ORDER_LIST}
    texts={['No orders are available to meet your conditions.']}
  />
))
storiesOf('NoData', module).add('收藏夹为空', () => (
  <NoData
    logo={NO_DATA_FAVORITE}
    texts={[
      'You have no favourite games.',
      'You can make games favourite by clicking a star',
      'in a game page.',
    ]}
  />
))
storiesOf('NoData', module).add('比赛列表为空', () => (
  <NoData
    logo={NO_DATA_GAME_LIST}
    texts={['No orders are available to meet your conditions.']}
  />
))

storiesOf('Modal', module)
  .add('投注成功', () => <SuccessfullyOrderedModal />)
  .add('余额不足', () => <InsufficientBalanceModal />)
  .add('投注失败', () => <BetFailedModal />)
  .add('比赛过期', () => <GameExpiredModal />)

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('Primary', () => (
    <Button theme="primary" title="I have title" onClick={action('clicked')}>
      Primary
    </Button>
  ))
  .add('Disabled', () => <Button disabled>Disabled</Button>)
  .add('With custom style', () => (
    <Button style={{ color: 'red', borderColor: 'red', height: '60px' }}>
      With Custom Style
    </Button>
  ))
