const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);     //101
showId.apply(null);     //undefined

/*

.call(agent) sets context
.apply(null) -> global context -> no id

*/

