/*

getStatus() calls status of server object by (this) keyword

*/

var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status; 
    }
};

console.log(server.getStatus()); // Online
