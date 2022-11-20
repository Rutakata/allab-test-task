import React, { useEffect, useState } from "react";
import { JobsApi } from "../../API/api";
import JobBoardItem from "./JobBoardItem";


const JobsBoardContainer = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const requestJobs = async () => {
            try {
                let jobsData = await JobsApi.getJobs();
                setJobs(jobsData.data); 
            } catch (e) {
                console.error(e);
            }
        };

        requestJobs();
    }, []);

    return (
        <div className="container pt-7 flex flex-col gap-y-2">
            {jobs.map((job) => <JobBoardItem job={job} />)}
        </div>
    );
}

export default JobsBoardContainer