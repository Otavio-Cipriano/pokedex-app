import * as style from './TypesBadge.style'

export default function TypesBadge({children, color}) {
  return (
    <style.Type color={color}>{children}</style.Type>
  )
}

