let user = document.head.querySelector('meta[name="user"]');

module.exports = {
    computed: {
        user() {
            // return JSON.parse(user.content);
            return JSON.parse('{"id":1, "name":"jonyedu19", "perfil":1}');
        },
        isAuthenticated() {
            //return !!user.content;
            return !!{ "id": 1, "name": "jonyedu19", "perfil": 1 };
        }
    }
}