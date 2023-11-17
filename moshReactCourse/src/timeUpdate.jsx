
function timeUpdate(){
    const element = (
        <div>
            <h1>Hello everyone</h1>
            <h2>The clock says: { new Date().toLocaleTimeString()}</h2>
        </div>
        
    );
}
setInterval(timeUpdate, 1000)
