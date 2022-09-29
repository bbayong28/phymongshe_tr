import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = ({ shopList }) => {

//우리에겐 중복이 제거된 배열 category... 가 필요하다...
//https://kyounghwan01.github.io/JS/JSbasic/dupulication-property-remove/#filter
//example.filter(
// (arr, index, callback) => index === callback.findIndex(t => t.id === arr.id)
// );

//공식같은거니까  ncate, cate 부분만 바꾸면 되니까 가지고 있으면 좋음

  const ncate = shopList.filter((itm, idx, it) => idx === it.findIndex(t => t.cate === itm.cate))
  //const n2cate = [...new Set(ncate)]  

    return (
      <ul>
          <li><Link to='/'>BRAND</Link></li>
          <li><Link to='/shopList'>SHOPPING</Link></li>
          {
              ncate.map(ca => {
                  return ca.cate && <li className='list'><Link to={'/shopList/' + ca.cate}>{ca.cate}</Link></li>
              })
          }
          {/* <li><Link to='/shopList/liquid'>liquid</Link></li>
          <li><Link to='/shopList/pencil'>pencil</Link></li>
          <li><Link to='/shopList/powder'>powder</Link></li> */}
          <li><Link to='/'>CS CENTER</Link></li>
      </ul>
  )
}

export default MainNav