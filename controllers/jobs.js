const { response } = require("express")

const createJob = async(req,res) => {
    res.send('create job')
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