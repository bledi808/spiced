const os = require("os");
const cluster = require("cluster");

const numCpus = os.cpus().length; // number of cores our OS has

//master process
cluster.setupMaster({
    exec: __dirname + "/index.js",
});

//generate child workers
for (let i = 0; i < numCpus; i++) {
    //spawn my worker
    cluster.fork();
}

//replacing a worker that dies
cluster.on("exit", (worker) => {
    console.log("this child worker has died: ", worker.process.pid);
    cluster.fork();
});
