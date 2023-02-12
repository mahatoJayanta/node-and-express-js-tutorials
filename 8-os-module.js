const os = require('os')

//info about curr user 
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS);

//output -->


// {
//     uid: -1,
//     gid: -1,
//     username: 'USER',
//     homedir: 'C:\\Users\\USER',
//     shell: null
//   }
//   the system uptime is 241363 seconds
//   {
//     name: 'Windows_NT',
//     release: '10.0.19042',
//     totalMem: 4180676608,
//     freeMem: 683610112