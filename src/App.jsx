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
            <div className="bg-gray-200 w-full h-full overflow-hidden">
                <div className="mx-auto my-[5rem] w-full max-w-[1200px] overflow-hidden bg-red-900 text-center">
                    <h1 className="p-[2rem] text-3xl font-bold">
                        About Me
                    </h1>
                    <div
                        className="bg-sky-500 w-[13rem] h-[13rem] mx-auto rounded-full flex items-center justify-center"
                        id="profile_img">
                        <img src="" alt="프로필"/>
                    </div>
                    <div className="grid grid-cols-3 gap-[1rem] my-[2rem] mx-auto max-w-[600px]">
                        <div className="info-card">
                            <div className="info-card-img">
                                <img src="" alt=""/>
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
                        <div className="info-card">
                            <div className="info-card-img">
                                <img src="" alt=""/>
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
                        <div className="info-card">
                            <div className="info-card-img">
                                <img src="" alt=""/>
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
                        <div className="info-card">
                            <div className="info-card-img">
                                <img src="" alt=""/>
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
                        <div className="info-card">
                            <div className="info-card-img">
                                <img src="" alt=""/>
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
                        <div className="info-card">
                            <div className="info-card-img">
                                <img src="" alt=""/>
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
        </>
    )
}

export default App
