import React from "react";

const Modal = ({ open, onClose, project }) => {
    if (!open || !project) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all"
            onClick={onClose}
        >
            <div 
                className="relative bg-[#23272f] text-[#f3f3f3] rounded-2xl shadow-2xl p-10 max-w-xl w-[92vw] animate-fadeIn border border-[#7dd3fc]/30"
                onClick={e => e.stopPropagation()}
            >
                {/* 닫기 버튼 */}
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-[#7dd3fc] text-3xl font-bold transition cursor-pointer"
                    onClick={onClose}
                    aria-label="닫기"
                >
                    ×
                </button>
                <div className="modal-scroll overflow-y-auto max-h-[70vh] pr-2">
                    {/* 타이틀/기간 */}
                    <div className="flex flex-col items-center mb-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 text-center text-[#7dd3fc] drop-shadow-lg tracking-tight">
                            {project.title}
                        </h2>
                        <div className="text-center text-base text-[#b3e7fd] mb-1 font-medium tracking-wide">{project.date}</div>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#7dd3fc] text-[#23272f] px-5 py-1.5 rounded-full font-semibold text-base hover:bg-[#38bdf8] transition mt-2 shadow"
                            >
                                사이트 바로가기 ↗
                            </a>
                        )}
                    </div>
                    {/* 한줄 소개 */}
                    {project.introduce && (
                        <p className="mb-8 text-[#f3f3f3] text-center text-lg sm:text-xl leading-relaxed bg-[#353a45]/60 rounded-xl px-4 py-3 shadow">
                            {project.introduce}
                        </p>
                    )}
                    {/* 주요 기능 */}
                    {project.function && (
                        <section className="mb-7">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block w-1.5 h-6 bg-[#7dd3fc] rounded-full"></span>
                                <h3 className="font-bold text-[#7dd3fc] text-lg">주요 기능</h3>
                            </div>
                            <ul className="list-disc list-inside text-base text-[#f3f3f3] pl-4 space-y-2">
                                {project.function.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        </section>
                    )}
                    {/* 담당 역할/파트 */}
                    {project.part && (
                        <section className="mb-7">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block w-1.5 h-6 bg-[#7dd3fc] rounded-full"></span>
                                <h3 className="font-bold text-[#7dd3fc] text-lg">담당 역할</h3>
                            </div>
                            <ul className="list-disc list-inside text-base text-[#f3f3f3] pl-4 space-y-2">
                                {project.part.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                        </section>
                    )}
                    {/* 느낀점 */}
                    {project.feeling && (
                        <section className="mb-7">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block w-1.5 h-6 bg-[#7dd3fc] rounded-full"></span>
                                <h3 className="font-bold text-[#7dd3fc] text-lg">느낀점</h3>
                            </div>
                            <ul className="list-disc list-inside text-base text-[#f3f3f3] pl-4 space-y-2">
                                {project.feeling.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        </section>
                    )}
                    {/* 사용 기술 */}
                    {project.skills && (
                        <section className="mb-7">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block w-1.5 h-6 bg-[#7dd3fc] rounded-full"></span>
                                <h3 className="font-bold text-[#7dd3fc] text-lg">사용 기술</h3>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 mb-1">
                                {project.skills.map((skill, idx) => (
                                    <span
                                        key={skill + idx}
                                        className="bg-[#353a45] text-[#7dd3fc] px-3 py-1 rounded-full text-sm font-semibold shadow border border-[#7dd3fc]/30"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}
                    {/* 트러블슈팅 */}
                    {project.trouble_shooting && (
                        <section className="mb-2">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block w-1.5 h-6 bg-[#7dd3fc] rounded-full"></span>
                                <h3 className="font-bold text-[#7dd3fc] text-lg">트러블슈팅</h3>
                            </div>
                            <ul className="list-disc list-inside text-base text-[#f3f3f3] pl-4 space-y-4">
                                {project.trouble_shooting.trouble?.map((t, i) => (
                                    <li key={i} className="bg-[#353a45]/60 rounded-lg px-3 py-2">
                                        <span className="font-semibold text-[#38bdf8]">문제: </span>{t}
                                        <br/>
                                        <span className="font-semibold text-[#fbbf24]">해결: </span>
                                        {project.trouble_shooting.shooting?.[i]}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;