import { Card } from 'react-bootstrap'

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  return (
    <Card>
      <Card.Img
        variant='top'
        src={imgUrl}
        height='240px'
        style={{ objectFit: 'cover' }}
      />
    </Card>
  )
}
