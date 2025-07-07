import Header from "./components/Header.jsx";
import {useState} from "react";

function App() {
    const frontSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Axios', 'PWA', 'Vercel']
    const backSkills = ['Node.js', 'Express', 'supabase', 'cloudtype']
    const projects = [
        {
            title: "With Go - 기사 앱",
            content: "사용자, 관리자, 기사 간의 상호작용을 기반으로 한 배송 관리 시스템(기사 전용 앱)",
            skills: ['TailWind', 'Node.js', 'nunjucks', 'Axios', 'supabase', 'PWA', 'Cloudtype']
        },
        {
            title: "실시간 대기정보 제공 및 알림 서비스",
            content: "사용자에게 실시간 대기정보 및 위험수준에 따른 알림 서비스를 제공합니다.",
            skills: ['React', 'Node.js', 'Tailwind', 'Axios', 'Supabase', 'vercel', 'Cloudtype']
        },
        {
            title: "With Go - 관리자 웹",
            content: "관리자가 효율적으로 서비스를 운영할 수 있도록 별도로 제작",
            skills: ['React', 'Axios', 'supabase', 'PWA', 'vercel']
        },
        {
            title: "With Go - 사용자 웹",
            content: "여행 중 짐을 안전하게 보관하거나 배송할 수 있는 짐 보관 및 배송 예약 서비스 플랫폼",
            skills: ['HTML', 'CSS', 'JS', 'supabase']
        }
    ]
    const education = [
        {
            date: "2019.03 ~ 2025.02",
            title: "영진전문대학교",
            sub_title: "컴퓨터정보계열(스마트게임 컨텐츠과) 졸업"
        },
        {
            date: "2025.01 ~ 2025.07",
            title: "그린 컴퓨터 아카데미"
        }
    ]
    return (
        <>
            <Header/>
            <div className="bg-red-50 w-full h-full overflow-hidden">
                <div className="mx-auto my-[5rem] w-full max-w-[1200px] bg-red-900 text-center"
                     id="intro">
                    <h1 className="text-3xl">
                        풀스택 개발자 <span className="font-bold">차진영</span>입니다.
                    </h1>
                    <p className="text-xl mt-[2rem]">
                        뭐라고 쓸까
                    </p>
                </div>
            </div>
            <div className="bg-[#252525] px-[1.5rem] text-[#f3f3f3] w-full h-full overflow-hidden">
                <div
                    className="mx-auto my-[5rem] w-full max-w-[1200px] overflow-hidden bg-[#404040] text-center rounded-2xl ">
                    <h1 className="p-[2rem] text-3xl font-bold">
                        About Me
                    </h1>
                    <div
                        className="bg-white w-[13rem] h-[13rem] mx-auto mt-[1rem] rounded-full flex items-center justify-center"
                        id="profile_img">
                        <img src="" alt="프로필"/>
                    </div>
                    <div className="grid grid-cols-3 gap-[1rem] my-[2rem] mx-auto max-w-[800px]">
                        <div className="info-card flex gap-[1rem] mx-[2rem]">
                            <div className="info-card-img w-[2rem] h-[2rem]">
                                <img src="/icons/name.png" alt="" className="filter invert"/>
                            </div>
                            <div className="info-card-content text-left">
                                <p className="info-card-content-title font-bold">
                                    이름
                                </p>
                                <p className="info-card-content-body">
                                    차진영
                                </p>
                            </div>
                        </div>
                        <div className="info-card flex gap-[1rem] mx-[2rem]">
                            <div className="info-card-img w-[2rem] h-[2rem]">
                                <img src="/icons/birth.png" alt="" className="filter invert"/>
                            </div>
                            <div className="info-card-content text-left">
                                <p className="info-card-content-title font-bold">
                                    생년월일
                                </p>
                                <p className="info-card-content-body">
                                    00.07.07
                                </p>
                            </div>
                        </div>
                        <div className="info-card flex gap-[1rem] mx-[2rem]">
                            <div className="info-card-img w-[2rem] h-[2rem]">
                                <img src="/icons/location.png" alt="" className="filter invert"/>
                            </div>
                            <div className="info-card-content text-left">
                                <p className="info-card-content-title font-bold">
                                    위치
                                </p>
                                <p className="info-card-content-body">
                                    대구광역시 북구
                                </p>
                            </div>
                        </div>
                        <div className="info-card flex gap-[1rem] mx-[2rem]">
                            <div className="info-card-img w-[2rem] h-[2rem]">
                                <img src="/icons/phone.png" alt="" className="filter invert"/>
                            </div>
                            <div className="info-card-content text-left">
                                <p className="info-card-content-title font-bold">
                                    연락처
                                </p>
                                <p className="info-card-content-body">
                                    010-3367-3743
                                </p>
                            </div>
                        </div>
                        <div className="info-card flex gap-[1rem] mx-[2rem]">
                            <div className="info-card-img w-[2rem] h-[2rem]">
                                <img src="/icons/mail.png" alt="" className="filter invert"/>
                            </div>
                            <div className="info-card-content text-left">
                                <p className="info-card-content-title font-bold">
                                    이메일
                                </p>
                                <p className="info-card-content-body">
                                    ljs56144@naver.com
                                </p>
                            </div>
                        </div>
                        <div className="info-card flex gap-[1rem] mx-[2rem]">
                            <div className="info-card-img w-[2rem] h-[2rem]">
                                <img src="/icons/graduation.png" alt="" className="filter invert"/>
                            </div>
                            <div className="info-card-content text-left">
                                <p className="info-card-content-title font-bold">
                                    학력
                                </p>
                                <p className="info-card-content-body flex flex-col">
                                    <span>영진전문대</span>
                                    <span>(컴퓨터정보계열)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-lime-50 w-full h-full overflow-hidden">
                <div className="mx-auto my-[5rem] w-full max-w-[1200px] overflow-hidden bg-red-900 text-center">
                    <h1 className="p-[2rem] text-3xl font-bold">
                        Skill
                    </h1>
                    <div className="bg-cyan-50 w-full max-w-[800px] my-[1rem] mx-auto p-[1.5rem]">
                        <div className="bg-red-300 flex gap-[3rem]"
                             id="frontend">
                            <div className="bg-red-100 min-w-[7rem]"
                                 id="frontend-title">
                                Frontend
                            </div>
                            <div className="bg-red-200 flex gap-[1rem] flex-wrap"
                                 id="frontend-content">
                                {frontSkills.map((item, index) => {
                                    return (
                                        <div className="bg-[#202020] text-[#f3f3f3] px-[1rem]" key={item}>
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="bg-red-300 flex gap-[3rem] mt-[1.5rem]"
                             id="backend">
                            <div className="bg-red-100 min-w-[7rem]"
                                 id="backend-title">
                                Backend
                            </div>
                            <div className="bg-red-200 flex gap-[1rem] flex-wrap"
                                 id="backend-content">
                                {backSkills.map((item, index) => {
                                    return (
                                        <div className="bg-[#202020] text-[#f3f3f3] px-[1rem]" key={item}>
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-gray-200 w-full h-full overflow-hidden">
                <div className="mx-auto my-[5rem] w-full max-w-[1200px] overflow-hidden bg-red-900 text-center">
                    <h1 className="p-[2rem] text-3xl font-bold">
                        Project
                    </h1>
                    <div
                        className="bg-cyan-50 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[800px] my-[1rem] mx-auto p-[1.5rem]">
                        {
                            projects.map((item, index) => {
                                return (
                                    <div
                                        className="project-card bg-[#202020] text-[#f3f3f3] p-[1rem] flex flex-col gap-[1rem] text-start rounded-2xl"
                                        key={item.title}>
                                        <div className="project-card-title">
                                            {item.title}
                                        </div>
                                        <div className="project-card-content">
                                            {item.content}
                                        </div>
                                        <div className="project-card-skills flex gap-[1rem] flex-wrap">
                                            {item.skills.map((skill, index) => {
                                                return (
                                                    <div
                                                        className="project-card-skill bg-[#353535] px-[0.5rem] py-[0.2rem] rounded-lg"
                                                        key={skill + index}>
                                                        {skill}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 w-full h-full overflow-hidden">
                <div className="mx-auto my-[5rem] w-full max-w-[1200px] overflow-hidden bg-red-900 text-center">
                    <h1 className="p-[2rem] text-3xl font-bold">
                        Education
                    </h1>
                    <div className="bg-cyan-50 w-full max-w-[800px] my-[1rem] mx-auto p-[1.5rem]">

                    </div>
                </div>
            </div>
        </>
    )
}

export default App
