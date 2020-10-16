const { poolPromise } = require('../../database/db')

module.exports =async function (user) {
    const pool = await poolPromise;
    return pool.request()
        .input('UserName', user.UserName)
        .input('Password', null)
        .input('firstName', user.FirstName)
        .input('middleName', user.MiddleName===''?null:user.MiddleName)
        .input('lastname', user.LastName)
        .input('contactNo', user.ContactNumber)
        .input('Email', user.Email)
        .input('DOB', user.DOB)
        .input('location', null)
        .input('address', "NSG IT Park, Survey no. 127/2B, Office No. 702, 7th Floor, Near Sarjaa Restaurant, Aundh, Pune, Maharashtra 411007")
        .input('ReferredBy', "ESPL")
        .input('Gender', user.Gender)
        .input('MaritalStatus', "NA")
        .input('CollegeName', "NA")
        .input('ReferredByContact', null)
        .execute("dbo.OnlineTest_Login");

}