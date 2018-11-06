import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Container = styled.div`
  margin-right: 80px;
`

export const Block = styled.div`
  width: 40px;
  height: 40px;
  background: ${_ => '#' + (~~(Math.random() * (1 << 24))).toString(16)};
`

export const InlineBlock = styled(Block)`
  display: inline-block;
`
