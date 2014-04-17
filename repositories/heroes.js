(function() {
    "use strict";

    var Foxx = require("org/arangodb/foxx");
    var Heroes = Foxx.Repository.extend({"any": function() {
        return this.collection.any()._key;
    }});

    exports.Repository = Heroes;
})();
