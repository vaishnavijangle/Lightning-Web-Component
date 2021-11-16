import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {
    meetingRoomsInfo = [{ roomName: 'A-01', roomCapacity: '12' },
        { roomName: 'A-02', roomCapacity: '10' },
        { roomName: 'A-03', roomCapacity: '11' },
        { roomName: 'A-04', roomCapacity: '09' },
        { roomName: 'A-05', roomCapacity: '08' },
        { roomName: 'B-01', roomCapacity: '13' },
        { roomName: 'B-02', roomCapacity: '15' },
        { roomName: 'B-03', roomCapacity: '05' },
        { roomName: 'B-04', roomCapacity: '03' },
        { roomName: 'B-05', roomCapacity: '02' }
];
}