
'use client'

import FriendCard from '@/app/components/FriendCard'
import MessageButton from '@/app/components/MessageButton'
import { useMemo, useState } from 'react'

export default function FirstPost() {
  const [friends, setFriends] = useState([{
      id: 1,
      name: 'qwe',
    }, {
      id: 2,
      name: 'rrr'
    }]);



  return <div>
    <button onClick={() => {
      setFriends((prevs) => prevs?.map(v => ({
        ...v,
        id: v.id + 1
      })))
    }}>点我改变friends</button>
    {
      friends.map(v => <FriendCard key={v?.id} id={v.id} name={v.name}/>)
    }
    <MessageButton />
  </div>
}