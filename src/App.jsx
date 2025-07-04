import Header from "./components/Header.jsx";

function App() {

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
            <div className="bg-[#252525] text-[#f3f3f3] w-full h-full overflow-hidden">
                <div className="mx-auto my-[5rem] w-full max-w-[1200px] overflow-hidden bg-[#404040] text-center">
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
                                <img src="/public/icons/name.png" alt=""/>
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
                                <img src="/public/icons/birth.png" alt=""/>
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
                                <img src="/public/icons/location.png" alt=""/>
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
                                <img src="/public/icons/phone.png" alt=""/>
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
                                <img src="/public/icons/mail.png" alt=""/>
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
                                <img src="/public/icons/graduation.png" alt=""/>
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
                            <div className="bg-red-100 w-[7rem]"
                                 id="frontend-title">
                                Frontend
                            </div>
                            <div className="bg-red-200"
                                 id="frontend-content">
                                dd
                            </div>
                        </div>
                        <div className="bg-red-300 flex gap-[3rem]"
                             id="backend">
                            <div className="bg-red-100 w-[7rem]"
                                 id="backend-title">
                                Backend
                            </div>
                            <div className="bg-red-200"
                                 id="backend-content">
                                dd
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
                </div>
            </div>
        </>
    )
}

export default App
