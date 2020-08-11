new Vue({
    el: '#app',
    data: {
    people: null,
    selected: 0,
    },
    mounted: function() {
    axios.get(
    'https://raw.githubusercontent.com/benk9810nz/HelpdeskVueJS/master/hours.json')
    .then(response => (this.people = response.data))
    .catch((error) => {
    this.people = "Data not available";
    console.log(error);
    })
    },
    });