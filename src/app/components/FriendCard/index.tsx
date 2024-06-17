'use client'

const FriendCard: React.FC<{
    id: number;
    name: string
}>  = ({id, name}) => {
    return <div onClick={() => {
        console.log('id:', id);
    }}>
        <span>姓名：{name}</span>
        <p>id：{id}</p>
    </div>
}

export default FriendCard