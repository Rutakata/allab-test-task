import React from "react";
import { NavLink } from "react-router-dom";
import { Job } from "../../interfaces";
import { AiFillStar } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";


interface Props {
    job: Job,
};

const JobBoardItem: React.FC<Props> = (props: Props) => {
    const rating = [];
    let i = 0;
    while (i < 5) {
        rating.push(<AiFillStar size={20}/>);
        i++;
    }
    
    return (
        <div className="container mx-auto bg-white w-3/4 h-fit rounded-lg flex flex-row text-text-main py-6 pl-4 pr-3 gap-x-6">
            <div className="basis-1/12">
                <img className="rounded-full w-20 h-20" src={props.job.pictures[1]} alt="Avatar"/>
            </div>
            <div className="basis-6/12 flex flex-col gap-y-2">
                <h3 className="font-bold text-xl"><NavLink to={`/job/${props.job.id}`}>{props.job.title}</NavLink></h3>
                <div className="text-base font-normal text-text-secondary">Department name • {props.job.name}</div>
                <div className="text-base font-normal text-text-secondary">{props.job.address}</div>
            </div>
            <div className="flex flex-row my-auto justify-center basis-2/12">
                {rating.map((star) => {return star})}
            </div>
            <div className="grid justify-items-end basis-3/12 content-between">
                <BsBookmark size={20}/>
                <div>Posted on {props.job.createdAt.slice(0, 10)}</div>
            </div>
        </div>
    )
}

export default JobBoardItem;