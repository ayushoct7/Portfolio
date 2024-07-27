import React from 'react'
import pic from "../../public/new.png";

function Experience() {
    const cardItem=[
        {
            id:1,
            logo:pic,
            name:"MongoDB"
        },
        {
            id:2,
            logo:pic,
            name:"Express"
        },
        {
            id:3,
            logo:pic,
            name:"ReactJS"
        },
        {
            id:4,
            logo:pic,
            name:"NodeJS"
        },
        {
            id:5,
            logo:pic,
            name:"Python"
        },
        {
            id:1,
            logo:pic,
            name:"Java"
        }



    ]
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div>
            <h1 className="text-3xl font-bold mb-5">Experience</h1>
            <p className="">I've more than 2 years of experiance in below technologies.</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                {
                    cardItem.map(({id,logo,name})=>(
                        <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                            <img src={pic} className="w-[150px] rounded-full" alt="" />
                            <div>
                                <div className="">{name}</div>
                                
                            </div>
                            

                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Experience;
