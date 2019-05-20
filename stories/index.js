import React from 'react'
import { storiesOf } from '@storybook/react'
import { Ring, Ripple, TextButton } from '../src'

storiesOf('Loaders', module)
  .add('Ring', () => <Ring />)
  .add('Ripple', () => <Ripple />)
  .add('TextButton', () => <TextButton />)
