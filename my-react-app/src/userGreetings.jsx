function UserGreetings(props){
    if(props.isloggedin){
        return <h2 className="msg logged">Hi, Welcome {props.name}</h2>
    }
    return <h3  className="msg notlogged">Please log in to continue</h3>
}

export default UserGreetings