"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DVBuilder {
    DVBuilder() { }
    validateAdminEnterprise() {
        // Validate the Admin Enterprise & Application is already created
        // Generate UUID of Admin Enterprise
        // Admin Role is created
        // Admin user is also created: login password
        // ACL for Admin Role is created
        // Custom Objects are created
        // STMs are created
        // AdminEnterprise.findOne({type: "Admin"}).exec(function(err, enterprise) {
        //     if (err) { throw err; }
        //     console.log(enterprise);
        // });
        return 1;
    }
    InitServices() {
        // load functions / resolvers
    }
}
exports.DVBuilder = DVBuilder;
//# sourceMappingURL=ServiceBuilder.js.map