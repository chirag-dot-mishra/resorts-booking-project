import React from 'react';
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from '../Context';
import Loading from "./Loading";

function RoomsContainer({context}){
    const {loading,sortedRooms,rooms} = context;
    if(loading){
        return <Loading />
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomsContainer);

// import React from 'react';
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import { RoomConsumer } from '../Context';
// import Loading from "./Loading";

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     // console.log(value);
//                     const {loading,sortedRooms,rooms} = value;
//                     if(loading){
//                         return <Loading />
//                     }
//                     return (
//                         <div>
//                             Hello from Rooms Room Container
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                     );
//                 }
//             }
//         </RoomConsumer>
//     );
// }
