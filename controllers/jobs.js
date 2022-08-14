
const createJob = async(req,res) => {
    res.json(req.body)
}

const getJob = async(req,res) => {
    res.send('get job')
}

const getAllJobs = async(req,res) => {
    res.send('get all jobs')
}

const updateJob = async(req,res) =>{
    res.send('update job')
}

const deleteJob = async(req,res) => {
    res.send('delete job')
}

module.exports = {
    createJob,
    getJob,
    getAllJobs,
    updateJob,
    deleteJob
}