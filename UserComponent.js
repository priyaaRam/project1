import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            users:[]
        }
    }
componentDidMount(){
    UserService.getUsers().then((response) => {
        this.setState({users: response.data})

        });
    }

    render (){
        return (
            <div>
                <h1
                    classname = "text-center"> Users List
                </h1>
                <table className = "table table-striped">
                    <thread>
                        <tr>
                            <td> User Id </td>
                            <td> User First Name </td>
                            <td> User Last Name </td>
                            <td> User email Id </td>

                            
                        </tr>
                    </thread>
                    <body>
                        {
                            this.state.users.map(
                                users =>
                                <tr  Key = {users.id}>
                                    <td> {users.id} </td>
                                    <td> {users.firstName} </td>
                                    <td> {users.lastName} </td>
                                    <td> {users.email} </td>
                                </tr>

                            )
                        }
                    </body>

                </table>


            </div>
        )
    }

    
}

export default UserComponent