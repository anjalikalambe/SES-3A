import React, { Component } from 'react';

export default class GroupAllocation extends Component{

    constructor(props){
        super(props);

        this.state={

        }
    }

    render(){
        return(
            <div>
                {Object.keys(stubbyUserData).map((item, i) => (
                    <p key={i}>
                        <div>
                            {stubbyUserData[item].firstName} belongs to group: 
                            {" " + stubbyUserData[item].groupId}
                        </div>
                    </p>
                ))}
            </div>
        )
    }
}

let stubbyUserData = [
    { firstName: "Nick", lastName: "Test", age: 26, gender: "male", groupId: 1, userId: 123456789 },
    { firstName: "Alice", lastName: "Test1", age: 23, gender: "female", groupId: 2, userId: 111111111 },
    { firstName: "Mel", lastName: "Test2", age: 21, gender: "other", groupId: 3, userId: 100000001 }
]
